// Announcements API Routes
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/models';

// Get all announcements
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '10');

    const query: any = {};
    if (category) query.category = category;

    const announcements = await prisma.announcement.findMany({
      where: query,
      include: { createdBy: { select: { id: true, fullName: true } } },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return NextResponse.json(announcements, { status: 200 });
  } catch (error) {
    console.error('Get announcements error:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching announcements' },
      { status: 500 }
    );
  }
}

// Create announcement (Admin only)
export async function POST(request: NextRequest) {
  try {
    const { title, content, category, attachments, createdById } = await request.json();

    // Validation
    if (!title || !content || !category || !createdById) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const announcement = await prisma.announcement.create({
      data: {
        title,
        content,
        category,
        attachments: attachments || [],
        createdById,
      },
      include: { createdBy: { select: { id: true, fullName: true } } },
    });

    return NextResponse.json(announcement, { status: 201 });
  } catch (error) {
    console.error('Create announcement error:', error);
    return NextResponse.json(
      { error: 'An error occurred while creating announcement' },
      { status: 500 }
    );
  }
}

// Update announcement
export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();

    if (!id) {
      return NextResponse.json(
        { error: 'Announcement ID is required' },
        { status: 400 }
      );
    }

    const announcement = await prisma.announcement.update({
      where: { id },
      data: updateData,
      include: { createdBy: { select: { id: true, fullName: true } } },
    });

    return NextResponse.json(announcement, { status: 200 });
  } catch (error) {
    console.error('Update announcement error:', error);
    return NextResponse.json(
      { error: 'An error occurred while updating announcement' },
      { status: 500 }
    );
  }
}

// Delete announcement
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Announcement ID is required' },
        { status: 400 }
      );
    }

    await prisma.announcement.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: 'Announcement deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete announcement error:', error);
    return NextResponse.json(
      { error: 'An error occurred while deleting announcement' },
      { status: 500 }
    );
  }
}
