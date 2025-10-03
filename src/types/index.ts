export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image?: string; // オプション: 画像のパス
    placeholder?: string; // オプション: プレースホルダーのテキスト
    isValidDetail?: boolean; // オプション: 詳細ページの有効性
}

export interface SkillCategory {
    category: string;
    items: string[];
}
