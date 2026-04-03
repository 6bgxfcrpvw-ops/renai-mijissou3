class Game {
    constructor() {
        this.currentScene = 'start';
        this.init();
    }

    init() {
        // ボタン操作
        document.getElementById('start-btn').addEventListener('click', () => this.startGame());
        document.getElementById('restart-btn').addEventListener('click', () => this.restartGame());
    }

    startGame() {
        document.getElementById('title-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.remove('hidden');
        this.displayScene('start');
    }

    displayScene(sceneId) {
        const scene = storyData.scenes[sceneId];
        if (!scene) return;

        // 背景設定
        const bgElement = document.getElementById('background');
        if (scene.background) {
            bgElement.style.backgroundImage = `url('assets/images/bg/${scene.background}')`;
        }

        // キャラクター設定
        const charElement = document.getElementById('character');
        if (scene.character) {
            charElement.src = `assets/images/characters/${scene.character}`;
            charElement.style.display = 'block';
        } else {
            charElement.style.display = 'none';
        }

        // テキスト表示
        document.getElementById('character-name').textContent = scene.character_name;
        document.getElementById('dialogue').textContent = scene.dialogue;

        // 選択肢表示
        const choicesContainer = document.getElementById('choices-container');
        choicesContainer.innerHTML = '';

        if (scene.choices) {
            scene.choices.forEach(choice => {
                const btn = document.createElement('button');
                btn.className = 'choice-btn';
                btn.textContent = choice.text;
                btn.addEventListener('click', () => this.displayScene(choice.next));
                choicesContainer.appendChild(btn);
            });
        }

        // ゲームオーバー処理
        if (scene.isGameOver) {
            setTimeout(() => this.showGameOver(scene.message), 1500);
        }

        this.currentScene = sceneId;
    }

    showGameOver(message) {
        document.getElementById('game-screen').classList.add('hidden');
        document.getElementById('gameover-screen').classList.remove('hidden');
        document.getElementById('gameover-message').textContent = message;
    }

    restartGame() {
        document.getElementById('title-screen').classList.remove('hidden');
        document.getElementById('gameover-screen').classList.add('hidden');
        document.getElementById('game-screen').classList.add('hidden');
        this.currentScene = 'start';
    }
}

// ゲーム開始
window.addEventListener('DOMContentLoaded', () => {
    new Game();
});
