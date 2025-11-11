/**
 * Mock data provider for development
 * Provides realistic incident, resource, hotline, and educational content data
 */

import type {
  Resource,
  Hotline,
  EducationContent,
  Event,
} from '../types';
import {
  IncidentType,
  ResourceType,
} from '../types';

export const MOCK_RESOURCES: Resource[] = [
  {
    id: 'res-1',
    name: 'National Domestic Violence Hotline',
    description: 'Crisis counseling and emergency services for domestic violence',
    type: ResourceType.HOTLINE,
    organization: 'National Domestic Violence Organization',
    phone: '1-800-799-7233',
    website: 'https://www.thehotline.org',
    location: { latitude: 38.9072, longitude: -77.0369 }, // Washington, DC
    serviceArea: ['United States'],
    languages: ['English', 'Spanish'],
    availability: 'always',
    emergencyHotline: true,
    anonymous: true,
    freeService: true,
    verified: true,
    ratings: 4.8,
    tags: ['hotline', 'domestic_violence', 'crisis', 'usa'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'res-2',
    name: 'Local Women\'s Shelter',
    description: 'Safe housing and support services for abuse survivors',
    type: ResourceType.SHELTER,
    organization: 'Community Care Association',
    phone: '555-1234',
    email: 'info@localwomensshelter.org',
    address: '123 Safe Street, Your City, ST 12345',
    location: { latitude: 40.7128, longitude: -74.006 }, // NYC
    serviceArea: ['New York'],
    languages: ['English', 'Spanish', 'Mandarin'],
    availability: 'always',
    emergencyHotline: true,
    anonymous: true,
    freeService: true,
    verified: true,
    ratings: 4.9,
    tags: ['shelter', 'housing', 'support', 'local'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'res-3',
    name: 'Legal Aid Clinic',
    description: 'Free legal consultation and representation for abuse victims',
    type: ResourceType.LEGAL,
    organization: 'Justice for All',
    phone: '555-5678',
    email: 'help@legalaidclinic.org',
    location: { latitude: 34.0522, longitude: -118.2437 }, // LA
    serviceArea: ['California'],
    languages: ['English', 'Spanish'],
    availability: 'business_hours',
    emergencyHotline: false,
    anonymous: false,
    freeService: true,
    verified: true,
    ratings: 4.7,
    tags: ['legal', 'consultation', 'free', 'advocacy'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'res-4',
    name: 'Crisis Counseling Services',
    description: 'Professional mental health support for trauma and abuse',
    type: ResourceType.COUNSELING,
    organization: 'Mental Health Alliance',
    phone: '555-9012',
    email: 'counseling@mha.org',
    website: 'https://www.mentalhealthalliance.org',
    location: { latitude: 41.8781, longitude: -87.6298 }, // Chicago
    serviceArea: ['Illinois', 'Wisconsin', 'Indiana'],
    languages: ['English', 'Spanish', 'Polish'],
    availability: 'scheduled',
    emergencyHotline: true,
    anonymous: true,
    freeService: false,
    verified: true,
    ratings: 4.8,
    tags: ['counseling', 'mental_health', 'trauma', 'therapy'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'res-5',
    name: 'Medical Response Team',
    description: 'Emergency medical care with trauma-informed approach',
    type: ResourceType.MEDICAL,
    organization: 'Community Hospital',
    phone: '911',
    address: '456 Health Ave, Medical City, ST 67890',
    location: { latitude: 39.7392, longitude: -104.9903 }, // Denver
    serviceArea: ['Colorado'],
    languages: ['English', 'Spanish', 'Vietnamese'],
    availability: 'always',
    emergencyHotline: true,
    anonymous: true,
    freeService: true,
    verified: true,
    ratings: 4.9,
    tags: ['medical', 'emergency', 'hospital', 'trauma'],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const MOCK_HOTLINES: Hotline[] = [
  {
    id: 'hl-1',
    name: 'National Domestic Violence Hotline',
    number: '1-800-799-7233',
    country: 'United States',
    language: 'English',
    available24_7: true,
    availability: '24/7, 365 days a year',
    type: 'national',
    supportsText: true,
    supportsChat: true,
    supportsVideo: false,
    isAnonymous: true,
    website: 'https://www.thehotline.org',
    description: 'Free and confidential support',
  },
  {
    id: 'hl-2',
    name: 'RAINN (Rape, Abuse & Incest National Network)',
    number: '1-800-656-4673',
    country: 'United States',
    language: 'English',
    available24_7: true,
    availability: '24/7, 365 days a year',
    type: 'national',
    supportsText: true,
    supportsChat: true,
    supportsVideo: true,
    isAnonymous: true,
    website: 'https://www.rainn.org',
    description: 'Support for sexual assault survivors',
  },
  {
    id: 'hl-3',
    name: 'National Human Trafficking Hotline',
    number: '1-888-373-7888',
    country: 'United States',
    language: 'English',
    available24_7: true,
    availability: '24/7, 365 days a year',
    type: 'national',
    supportsText: true,
    supportsChat: true,
    supportsVideo: false,
    isAnonymous: true,
    website: 'https://humantraffickinghotline.org',
    description: 'Help for trafficking victims',
  },
  {
    id: 'hl-4',
    name: 'Womens Aid',
    number: '0808 2000 247',
    country: 'United Kingdom',
    language: 'English',
    available24_7: true,
    availability: '24/7, 365 days a year',
    type: 'national',
    supportsText: false,
    supportsChat: true,
    supportsVideo: false,
    isAnonymous: true,
    website: 'https://www.womensaid.org.uk',
    description: 'UK domestic violence support',
  },
];

export const MOCK_EDUCATION: EducationContent[] = [
  {
    id: 'edu-1',
    title: 'Understanding the Cycle of Abuse',
    description: 'Learn about the patterns of abusive relationships and how to recognize them',
    content: `
      The cycle of abuse typically includes three phases:
      1. Tension Building - Abuser becomes irritable, criticism increases
      2. Incident/Explosive Phase - Actual abuse occurs
      3. Reconciliation/Calm Phase - Abuser apologizes and promises change
      
      Understanding this cycle helps victims recognize patterns and plan safely.
    `,
    contentType: 'article',
    category: 'warning_signs',
    language: 'English',
    targetAudience: 'survivors',
    difficulty: 'beginner',
    estimatedReadTime: 5,
    rating: 4.8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'edu-2',
    title: 'Creating Your Safety Plan',
    description: 'Step-by-step guide to develop a personalized safety plan',
    content: `
      A safety plan includes:
      - Identifying safe places and escape routes
      - Emergency contacts and code words
      - Important documents location
      - Support network details
      - Daily routine modifications
    `,
    contentType: 'article',
    category: 'recovery',
    language: 'English',
    targetAudience: 'survivors',
    difficulty: 'intermediate',
    estimatedReadTime: 8,
    rating: 4.9,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'edu-3',
    title: 'Digital Safety for Survivors',
    description: 'Protect yourself from digital harassment and online abuse',
    content: `
      Digital safety tips:
      - Use strong passwords and change frequently
      - Enable two-factor authentication
      - Clear browsing history
      - Use private browsing mode
      - Monitor account activity
      - Block abusers on social media
    `,
    contentType: 'infographic',
    category: 'prevention',
    language: 'English',
    targetAudience: 'survivors',
    difficulty: 'beginner',
    estimatedReadTime: 3,
    rating: 4.7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'edu-4',
    title: 'Legal Rights for Abuse Survivors',
    description: 'Know your legal protections and available remedies',
    content: `
      Your legal rights include:
      - Restraining/protection orders
      - Custody protections
      - Housing rights
      - Immigration protections
      - Employment rights
      - Financial protections
    `,
    contentType: 'article',
    category: 'legal_rights',
    language: 'English',
    targetAudience: 'survivors',
    difficulty: 'intermediate',
    estimatedReadTime: 10,
    rating: 4.8,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const MOCK_EVENTS: Event[] = [
  {
    id: 'evt-1',
    title: 'Support Group for Survivors',
    description: 'Weekly peer support meeting for survivors of domestic violence',
    eventType: 'support_group',
    startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000),
    isOnline: true,
    zoomLink: 'https://zoom.us/j/example',
    organizerId: 'org-1',
    capacity: 30,
    registrations: 12,
    language: 'English',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'evt-2',
    title: 'Workplace Safety Training',
    description: 'Training for employers on recognizing and responding to employee abuse',
    eventType: 'training',
    startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
    location: '123 Business Plaza, Suite 100',
    isOnline: false,
    organizerId: 'org-2',
    capacity: 50,
    registrations: 28,
    language: 'English',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const WARNING_SIGNS = [
  'Controlling behavior and isolation from friends/family',
  'Excessive jealousy and possessiveness',
  'Intimidation or threatening behavior',
  'Physical violence or property damage',
  'Emotional abuse and humiliation',
  'Financial control',
  'Forced or coerced sexual activity',
  'Monitoring of phone, email, or location',
  'Unpredictable mood changes',
  'Substance abuse or alcohol problems',
];

export const ABUSE_RESOURCES_KEYWORDS = {
  [IncidentType.PHYSICAL_ABUSE]: [ResourceType.SHELTER, ResourceType.MEDICAL, ResourceType.HOTLINE],
  [IncidentType.SEXUAL_ABUSE]: [ResourceType.COUNSELING, ResourceType.MEDICAL, ResourceType.HOTLINE],
  [IncidentType.EMOTIONAL_ABUSE]: [ResourceType.COUNSELING, ResourceType.PEER_SUPPORT],
  [IncidentType.FINANCIAL_ABUSE]: [ResourceType.LEGAL, ResourceType.FINANCIAL_AID],
  [IncidentType.DIGITAL_ABUSE]: [ResourceType.LEGAL, ResourceType.COUNSELING],
  [IncidentType.STALKING]: [ResourceType.LEGAL, ResourceType.SHELTER, ResourceType.HOTLINE],
  [IncidentType.HUMAN_TRAFFICKING]: [ResourceType.SHELTER, ResourceType.LEGAL, ResourceType.HOTLINE],
};
