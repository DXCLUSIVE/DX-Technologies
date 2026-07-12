// Database Models for Viceroys School Portal
// Using Prisma ORM for database management

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// User Model
export interface User {
  id: string;
  email: string;
  password: string; // hashed
  fullName: string;
  role: 'parent' | 'student' | 'teacher' | 'admin';
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Student Model
export interface Student {
  id: string;
  userId: string;
  admissionNumber: string;
  class: string;
  dateOfBirth: Date;
  parentId?: string;
  guardianName?: string;
  guardianPhone?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Teacher Model
export interface Teacher {
  id: string;
  userId: string;
  staffId: string;
  subject: string;
  classes: string[];
  qualifications: string[];
  yearsOfExperience: number;
  createdAt: Date;
  updatedAt: Date;
}

// Result Model
export interface Result {
  id: string;
  studentId: string;
  term: string;
  year: number;
  subject: string;
  ca: number; // Continuous Assessment
  exam: number;
  total: number;
  grade: string;
  remark: string;
  createdAt: Date;
  updatedAt: Date;
}

// Payment Model
export interface Payment {
  id: string;
  userId: string;
  studentId?: string;
  amount: number;
  description: string;
  paymentMethod: 'card' | 'bank' | 'mobile';
  status: 'pending' | 'completed' | 'failed';
  transactionId?: string;
  paidAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Announcement Model
export interface Announcement {
  id: string;
  title: string;
  content: string;
  category: string;
  attachments?: string[];
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

// Fee Model
export interface Fee {
  id: string;
  studentId: string;
  term: string;
  year: number;
  amount: number;
  status: 'paid' | 'pending' | 'partial';
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export default prisma;