// Students API Routes (CRUD)
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/models';

// Get all students
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const classFilter = searchParams.get('class');
    const searchName = searchParams.get('search');

    const query: any = {};
    if (classFilter) query.class = classFilter;
    if (searchName) {
      query.OR = [
        { user: { fullName: { contains: searchName, mode: 'insensitive' } } },
        { admissionNumber: { contains: searchName, mode: 'insensitive' } },
      ];
    }

    const students = await prisma.student.findMany({
      where: query,
      include: { user: true },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error('Get students error:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching students' },
      { status: 500 }
    );
  }
}

// Create student
export async function POST(request: NextRequest) {
  try {
    const {
      fullName,
      email,
      admissionNumber,
      class: studentClass,
      dateOfBirth,
      parentName,
      parentPhone,
      parentEmail,
    } = await request.json();

    // Validation
    if (!fullName || !email || !admissionNumber || !studentClass || !dateOfBirth) {
      return NextResponse.json(
        { error: 'All required fields must be provided' },
        { status: 400 }
      );
    }

    // Check if admission number exists
    const existingStudent = await prisma.student.findUnique({
      where: { admissionNumber },
    });

    if (existingStudent) {
      return NextResponse.json(
        { error: 'Admission number already exists' },
        { status: 409 }
      );
    }

    // Create user and student
    const student = await prisma.student.create({
      data: {
        admissionNumber,
        class: studentClass,
        dateOfBirth: new Date(dateOfBirth),
        parentName,
        parentPhone,
        parentEmail,
        user: {
          create: {
            email,
            fullName,
            password: 'temp-password', // Should be replaced by user on first login
            role: 'STUDENT',
          },
        },
      },
      include: { user: true },
    });

    return NextResponse.json(student, { status: 201 });
  } catch (error) {
    console.error('Create student error:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating student' },
      { status: 500 }
    );
  }
}

// Update student
export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Student ID is required' },
        { status: 400 }
      );
    }

    const student = await prisma.student.update({
      where: { id },
      data: updateData,
      include: { user: true },
    });

    return NextResponse.json(student, { status: 200 });
  } catch (error) {
    console.error('Update student error:', error);
    return NextResponse.json(
      { error: 'An error occurred while updating student' },
      { status: 500 }
    );
  }
}

// Delete student
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Student ID is required' },
        { status: 400 }
      );
    }

    await prisma.student.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'Student deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete student error:', error);
    return NextResponse.json(
      { error: 'An error occurred while deleting student' },
      { status: 500 }
    );
  }
}
