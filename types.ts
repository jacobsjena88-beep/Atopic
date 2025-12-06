export interface ContentSection {
  title: string;
  key: 'mission' | 'vision' | 'story';
  prompt: string;
}

export interface GeneratedContent {
  title: string;
  text: string;
}