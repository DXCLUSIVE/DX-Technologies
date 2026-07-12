// API Routes for Authentication
import { NextRequest, NextResponse } from 'next/server';
import { hashPassword, verifyPassword, generateToken, validateEmail, checkPasswordStrength } from '@/lib/auth';
import prisma from '@/lib/models';

// Sign Up Route
export async function POST(request: NextRequest) {
  try {
    const { fullName, email, password, role } = await request.json();

    // Validation
    if (!fullName || !email || !password || !role) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (checkPasswordStrength(password) < 2) {
      return NextResponse.json(
        { error: 'Password must be at least 8 characters with uppercase, number, and special character' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName,
        role,
      },
    });

    // Generate token
    const token = generateToken(user.id, user.role);

    return NextResponse.json(
      {
        message: 'Account created successfully',
        user: { id: user.id, email: user.email, fullName: user.fullName, role: user.role },
        token,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Sign up error:', error);
    return NextResponse.json(
      { error: 'An error occurred during sign up' },
      { status: 500 }
    );
  }
}
