import type { Project } from '../types';

export const projects: Project[] = [
    {
        id: 1,
        title: 'Synapse',
        description:
            'X(旧Twitter)ライクのSNS. 制作途中なので接続には時間がかかる可能性があります。',
        tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        link: 'https://synapse-sns.com',
        image: '/images/projects/Synapse.png',
    },
    {
        id: 2,
        title: 'アウトゲームUI実装',
        description:
            'スマートフォン向けゲーム「コードギアス 反逆のルルーシュ ロストストーリーズ」のホーム画面を作成しました。',
        tags: ['React'],
        link: 'https://docs.google.com/presentation/d/1QnM6mPoIRPICTvwaqjBfcXah9DptO6FgcqoINhGGFOY/edit?usp=sharing',
        placeholder: '画像は詳細を見ると確認できます',
    },
    {
        id: 3,
        title: 'AIchemist(仮)',
        description:
            'GPT-4oを組み込み、自然言語の入力に応じたプレイリストを作成するサービスを開発中です。',
        tags: ['ReactNative', 'TypeScript', 'Expo', 'OpenAI', 'Firebase'],
        link: '#',
        isValidDetail: false,
    },
    {
        id: 4,
        title: 'メモアプリ(名称未定)',
        description: 'SNSへの投稿のような気軽さでメモを保存できるアプリを開発中です。',
        tags: ['ReactNative', 'TypeScript', 'Expo'],    
        link: '#',
        isValidDetail: false,
    },
];
