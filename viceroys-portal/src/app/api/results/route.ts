// Results API Routes
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/models';

// Get all results for a student
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const studentId = searchParams.get('studentId');
    const term = searchParams.get('term');
    const year = searchParams.get('year');

    if (!studentId) {
      return NextResponse.json(
        { error: 'Student ID is required' },
        { status: 400 }
      );
    }

    const query: any = { studentId };
    if (term) query.term = term;
    if (year) query.year = parseInt(year);

    const results = await prisma.result.findMany({
      where: query,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('Get results error:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching results' },
      { status: 500 }
    );
  }
}

// Create result (Admin only)
export async function POST(request: NextRequest) {
  try {
    const { studentId, term, year, subject, ca, exam, grade, remark } = await request.json();

    // Validation
    if (!studentId || !term || !year || !subject || ca === undefined || exam === undefined) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Calculate total
    const total = ca + exam;

    const result = await prisma.result.create({
      data: {
        studentId,
        term,
        year,
        subject,
        ca,
        exam,
        total,
        grade: grade || calculateGrade(total),
        remark: remark || calculateRemark(total),
      },
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Create result error:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating result' },
      { status: 500 }
    );
  }
}

// Helper function to calculate grade
function calculateGrade(total: number): string {
  if (total >= 80) return 'A';
  if (total >= 70) return 'B';
  if (total >= 60) return 'C';
  if (total >= 50) return 'D';
  if (total >= 40) return 'E';
  return 'F';
}

// Helper function to calculate remark
function calculateRemark(total: number): string {
  if (total >= 80) return 'Excellent';
  if (total >= 70) return 'Good';
  if (total >= 60) return 'Fair';
  if (total >= 50) return 'Pass';
  return 'Fail';
}
