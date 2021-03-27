export type Career = {
  term: string[];
  companyName: string;
  description: string;
  isCurrent?: boolean;
};

export const carees: Career[] = [
  {
    term: ['2021/04'],
    companyName: '合同会社DMM.com',
    description: '研修期間中のため未配属',
    isCurrent: true,
  },
  {
    term: ['2019/09', '2021/02'],
    companyName: '株式会社ELYZA',
    description:
      '機械学習エンジニア・データサイエンティストとして需要予測システムのPoC・開発実装を行いました。またそれに加えコンサルティング業務を兼任しつつ、顧客向けのWEBサービスの開発メンバーとしてフロントエンド開発からAPI実装も行いました。',
  },
  {
    term: ['2019/08'],
    companyName: 'クックパッド株式会社',
    description:
      'インターン生としてRuby on Railsを用いた動画配信サービスのアーカイブ差し替え機能をフロントエンド・サーバーサイドで実装しました。',
  },
];
