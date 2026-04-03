// ストーリーデータ
const storyData = {
    scenes: {
        // タイトル後の最初のシーン
        start: {
            background: 'school.png',
            character: null,
            character_name: '',
            dialogue: '今日も平凡な学園生活が始まる...',
            choices: [
                { text: '放課後、校庭へ向かう', next: 'scene_choice_1' },
                { text: '放課後、図書館へ向かう', next: 'scene_choice_1' }
            ]
        },

        scene_choice_1: {
            background: 'school.png',
            character: 'character_a.png',
            character_name: 'キャラクターA',
            dialogue: 'あ、君だ。いつもボーッとしてるね。',
            choices: [
                { text: '「君もだね」と返す', next: 'scene_a_bad_1' },
                { text: '無視する', next: 'scene_a_bad_2' }
            ]
        },

        scene_a_bad_1: {
            background: 'school.png',
            character: 'character_a.png',
            character_name: 'キャラクターA',
            dialogue: '...最悪。話しかけてくるなよ。',
            choices: [
                { text: '謝る', next: 'gameover_a' },
                { text: '逆ギレする', next: 'gameover_a' }
            ]
        },

        scene_a_bad_2: {
            background: 'school.png',
            character: 'character_a.png',
            character_name: 'キャラクターA',
            dialogue: '無視？ふざけんなよ！',
            choices: [
                { text: '逃げる', next: 'gameover_a' }
            ]
        },

        gameover_a: {
            background: null,
            character: null,
            character_name: '',
            dialogue: 'キャラクターAとの関係は進展しなかった...',
            isGameOver: true,
            message: 'ゲームオーバー\nクリア失敗：誰とも付き合えませんでした'
        }
    }
};
