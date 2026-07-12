// Payments API Routes
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/models';

// Get payments for a user
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const payments = await prisma.payment.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(payments, { status: 200 });
  } catch (error) {
    console.error('Get payments error:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching payments' },
      { status: 500 }
    );
  }
}

// Initiate payment
export async function POST(request: NextRequest) {
  try {
    const { userId, studentId, amount, description, paymentMethod } = await request.json();

    // Validation
    if (!userId || !amount || !description || !paymentMethod) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (amount <= 0) {
      return NextResponse.json(
        { error: 'Amount must be greater than 0' },
        { status: 400 }
      );
    }

    // Create payment record
    const payment = await prisma.payment.create({
      data: {
        userId,
        studentId: studentId || undefined,
        amount,
        description,
        paymentMethod: paymentMethod.toUpperCase(),
        status: 'PENDING',
        transactionId: generateTransactionId(),
      },
    });

    // In production, you would integrate with payment gateway here
    // For now, we're creating a placeholder

    return NextResponse.json(
      {
        message: 'Payment initiated',
        payment,
        // In production, return payment gateway response
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create payment error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing payment' },
      { status: 500 }
    );
  }
}

// Verify/Confirm payment
export async function PUT(request: NextRequest) {
  try {
    const { transactionId, status } = await request.json();

    if (!transactionId || !status) {
      return NextResponse.json(
        { error: 'Transaction ID and status are required' },
        { status: 400 }
      );
    }

    const payment = await prisma.payment.update({
      where: { transactionId },
      data: {
        status: status.toUpperCase(),
        paidAt: status === 'COMPLETED' ? new Date() : undefined,
      },
    });

    return NextResponse.json(payment, { status: 200 });
  } catch (error) {
    console.error('Update payment error:', error);
    return NextResponse.json(
      { error: 'An error occurred while updating payment' },
      { status: 500 }
    );
  }
}

function generateTransactionId(): string {
  return `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
