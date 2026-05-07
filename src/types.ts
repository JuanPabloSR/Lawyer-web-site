export type HeroSliderType = {
    title: string;
    description: string;
    image: string;
}

export type ServiceType = {
    icon: string;
    icon2?: string;
    title: string;
    image?: string;
    description?: string;
    id: number;
}

export type WorkStepType = {
    image: string;
    id: number;
    title: string;
    description: string;
}

export type MemberType = {
    name: string;
    image: string;
    role: string;
    specialty?: string;
    linkedin?: string;
}

export type TestimonialType = {
    message: string;
} & MemberType

export type BlogType = {
    id: number;
    title?: string;
    image: string;
    name: string;
    description?: string;
    date: string;
    duration?: number
}

export type CaseStudyType = {
    image: string;
    category: string;
    title: string;
}

export type FooterLinkType = {
    label: string;
    url: string;
}

export type FooterContactType= {
    icon: string;
    text: string;
    href: string;
}