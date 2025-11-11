/**
 * Core TypeScript types for EndGBV platform
 * Defines all domain models for victim support, resources, incidents, and peer support
 */

// ============================================================================
// USER & AUTHENTICATION TYPES
// ============================================================================

export enum UserRole {
  SURVIVOR = 'survivor',
  ADVOCATE = 'advocate',
  ORGANIZATION = 'organization',
  ADMIN = 'admin',
  ANONYMOUS = 'anonymous',
}

export interface User {
  id: string;
  email?: string;
  name?: string;
  role: UserRole;
  location?: {
    latitude: number;
    longitude: number;
    address?: string;
  };
  language: string;
  isAnonymous: boolean;
  createdAt: Date;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notificationsEnabled: boolean;
  shareAnonymously: boolean;
  trackLocation: boolean;
}

// ============================================================================
// INCIDENT & SAFETY TYPES
// ============================================================================

export enum IncidentType {
  PHYSICAL_ABUSE = 'physical_abuse',
  EMOTIONAL_ABUSE = 'emotional_abuse',
  SEXUAL_ABUSE = 'sexual_abuse',
  FINANCIAL_ABUSE = 'financial_abuse',
  DIGITAL_ABUSE = 'digital_abuse',
  STALKING = 'stalking',
  HARASSMENT = 'harassment',
  HUMAN_TRAFFICKING = 'human_trafficking',
  FORCED_MARRIAGE = 'forced_marriage',
  FGM = 'fgm', // Female Genital Mutilation
  HONOR_KILLING = 'honor_killing',
  OTHER = 'other',
}

export enum IncidentSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum IncidentStatus {
  DRAFT = 'draft',
  REPORTED = 'reported',
  UNDER_REVIEW = 'under_review',
  RESOLVED = 'resolved',
  ARCHIVED = 'archived',
}

export interface Incident {
  id: string;
  userId: string;
  type: IncidentType;
  severity: IncidentSeverity;
  status: IncidentStatus;
  description: string;
  location?: {
    latitude: number;
    longitude: number;
    address?: string;
    isSafe: boolean;
  };
  dateOccurred: Date;
  reportedAt: Date;
  isAnonymous: boolean;
  consentToContact: boolean;
  supportResourcesMatched: string[]; // Resource IDs
  safetyPlan?: SafetyPlan;
  urgentAssistanceNeeded: boolean;
}

export interface SafetyPlan {
  id: string;
  incidentId: string;
  emergencyContacts: EmergencyContact[];
  safeLocations: SafeLocation[];
  codeWords: string[];
  importantDocuments: string[]; // URLs or file storage references
  dailyRoutineAlteration: string;
  supportNetwork: string;
  personalisedAction: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface EmergencyContact {
  id: string;
  name: string;
  phone: string;
  relationship: string;
  isSafe: boolean; // Safe person to contact
}

export interface SafeLocation {
  id: string;
  name: string;
  address: string;
  type: 'home' | 'workplace' | 'friend' | 'family' | 'shelter' | 'public';
  description?: string;
}

// ============================================================================
// RESOURCE & HOTLINE TYPES
// ============================================================================

export enum ResourceType {
  HOTLINE = 'hotline',
  SHELTER = 'shelter',
  COUNSELING = 'counseling',
  LEGAL = 'legal',
  MEDICAL = 'medical',
  EDUCATION = 'education',
  FINANCIAL_AID = 'financial_aid',
  EMPLOYMENT = 'employment',
  CHILDCARE = 'childcare',
  ADVOCACY = 'advocacy',
  PEER_SUPPORT = 'peer_support',
  SAFE_HOUSE = 'safe_house',
}

export interface Resource {
  id: string;
  name: string;
  description: string;
  type: ResourceType;
  organization: string;
  organizationId?: string;
  phone?: string;
  email?: string;
  website?: string;
  address?: string;
  location: {
    latitude: number;
    longitude: number;
  };
  serviceArea: string[]; // Countries/regions served
  languages: string[];
  availability: 'always' | 'business_hours' | 'emergency_only' | 'scheduled';
  emergencyHotline: boolean;
  anonymous: boolean; // Accepts anonymous calls/requests
  freeService: boolean;
  verified: boolean;
  ratings: number; // 1-5
  matchScore?: number; // For incident matching
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Hotline {
  id: string;
  name: string;
  number: string;
  country: string;
  language: string;
  available24_7: boolean;
  availability: string;
  type: 'national' | 'local' | 'international';
  supportsText: boolean;
  supportsChat: boolean;
  supportsVideo: boolean;
  isAnonymous: boolean;
  website?: string;
  description?: string;
}

// ============================================================================
// COMMUNITY & PEER SUPPORT TYPES
// ============================================================================

export enum PostStatus {
  PUBLISHED = 'published',
  PENDING_REVIEW = 'pending_review',
  FLAGGED = 'flagged',
  ARCHIVED = 'archived',
}

export interface ForumPost {
  id: string;
  userId: string;
  userName: string;
  avatar?: string;
  title: string;
  content: string;
  category: 'stories' | 'questions' | 'resources' | 'events' | 'support';
  tags: string[];
  status: PostStatus;
  isAnonymous: boolean;
  replies: ForumReply[];
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  isPinned: boolean;
  isVerified: boolean; // Verified by moderator/expert
}

export interface ForumReply {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  avatar?: string;
  content: string;
  isAnonymous: boolean;
  isVerified: boolean;
  isExpert: boolean; // Expert response
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface PeerMatch {
  id: string;
  survivor1Id: string;
  survivor2Id: string;
  matchScore: number;
  commonFactors: string[]; // Similar incident types, locations, interests
  matchedAt: Date;
}

// ============================================================================
// CONTENT & PREVENTION TYPES
// ============================================================================

export interface EducationContent {
  id: string;
  title: string;
  description: string;
  content: string;
  contentType: 'article' | 'video' | 'infographic' | 'quiz' | 'podcast';
  category: 'prevention' | 'warning_signs' | 'recovery' | 'legal_rights' | 'resources';
  language: string;
  targetAudience: 'survivors' | 'allies' | 'educators' | 'parents' | 'general';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  mediaUrl?: string;
  estimatedReadTime: number; // minutes
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  eventType: 'workshop' | 'support_group' | 'training' | 'awareness_campaign' | 'webinar';
  startDate: Date;
  endDate: Date;
  location?: string;
  isOnline: boolean;
  zoomLink?: string;
  organizerId: string;
  capacity?: number;
  registrations: number;
  language: string;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// NOTIFICATION & ALERT TYPES
// ============================================================================

export enum NotificationType {
  RESOURCE_MATCHED = 'resource_matched',
  INCIDENT_UPDATE = 'incident_update',
  COMMUNITY_ACTIVITY = 'community_activity',
  SAFETY_ALERT = 'safety_alert',
  APPOINTMENT_REMINDER = 'appointment_reminder',
  MESSAGE = 'message',
  VERIFICATION = 'verification',
}

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  link?: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

// ============================================================================
// ORGANIZATION & STATS TYPES
// ============================================================================

export interface Organization {
  id: string;
  name: string;
  description: string;
  logo?: string;
  website?: string;
  email: string;
  phone?: string;
  address?: string;
  country: string;
  type: 'ngo' | 'government' | 'hospital' | 'legal' | 'shelter' | 'other';
  verified: boolean;
  resources: string[]; // Resource IDs
  staff: string[]; // User IDs
  createdAt: Date;
  updatedAt: Date;
}

export interface PlatformStats {
  totalIncidentsReported: number;
  totalUsersSupported: number;
  totalResourcesAvailable: number;
  averageResponseTime: number; // minutes
  survivorSatisfactionRate: number; // percentage
  hotlinesConnected: number;
  lastUpdated: Date;
}

// ============================================================================
// API RESPONSE & REQUEST TYPES
// ============================================================================

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

export interface QuickReportRequest {
  type: IncidentType;
  severity?: IncidentSeverity;
  location?: { latitude: number; longitude: number };
  description?: string;
  consentToContact: boolean;
  isAnonymous: boolean;
}

export interface LocationResponse {
  latitude: number;
  longitude: number;
  address?: string;
  error?: string;
}
