# 开心猫 H5 Demo

「开心猫不是催你开心，而是陪你轻轻撕开心情画布，看见今天藏在下面的一点小幸福。」

这是一个为 48 小时黑客松准备的静态 H5 MVP Demo，围绕“输入情绪 -> 猫猫读心嘴替 -> 撕开心情画布 -> 生成今日小幸福卡 -> 保存/下载分享”完成闭环。

## Demo 流程

1. 输入一句今天的情绪。
2. 云光猫进入倾听状态，生成“聊天读心嘴替”。
3. 点击“让猫猫撕开心情画布”。
4. 展示情绪画布表层，并由猫猫轻轻撕开。
5. 露出幸福底层，猫猫补一笔光。
6. 生成“今日小幸福卡”。
7. 保存到本地幸福画廊，或下载 PNG 分享卡。

## 核心功能

- 聊天读心嘴替：拆成情绪、需要、潜台词、用户嘴替、猫猫回应。
- 情绪画布：保留疲惫、焦虑、委屈、烦躁、开心 5 种情绪。
- 撕开动画：表层裂口、柔光扫过、幸福底图露出、猫猫接笔叠加。
- 今日小幸福卡：适合截图和下载 PNG，标题支持换行。
- 本地幸福画廊：使用 `localStorage`，最多保留 20 张，可清空。
- 安全提示：遇到自伤/自杀等危机表达时停止生成卡片，显示温柔安全提示。

## 技术栈

- HTML5
- CSS3
- Vanilla JavaScript
- Web Audio API 动态音效
- Canvas PNG 生成
- localStorage 本地存储

不依赖构建工具、不依赖后端、不需要安装 npm 包。

## 文件结构

```text
云光猫_H5_Demo/
├── index.html
├── styles.css
├── script.js
├── README.md
├── assets/
│   ├── pet/
│   ├── pet_cutouts/
│   ├── emotion_canvas/
│   ├── happiness_layer/
│   ├── pet_strokes/
│   ├── card_templates/
│   └── rive/
└── 云光猫美术素材包/
```

## 如何本地运行

方式一：直接运行

```text
双击 index.html
```

方式二：用任意静态服务运行，例如 Python：

```bash
python -m http.server 8080
```

然后打开：

```text
http://localhost:8080
```

当前项目保持纯前端静态 H5，直接打开 `index.html` 也可以运行。

## 如何接入智谱 AI

当前版本默认使用 `script.js` 中的本地规则函数：

```js
localAnalyze(userText)
```

已经预留：

```js
async function analyzeWithAI(userText) {}
```

后续接入智谱 AI 时，只需要替换 `analyzeWithAI()`，或在该函数中调用后端 API。推荐做法是：

1. 前端把 `userText` 发送给自己的后端接口，例如 `/api/analyze-emotion`。
2. 后端持有智谱 AI API Key，并调用智谱 AI。
3. 后端返回兼容当前结构的 JSON。
4. 如果 AI 调用失败，前端 fallback 到 `localAnalyze(userText)`。

注意：不要把真实 API Key 写进浏览器端代码。

AI 返回结构建议保持：

```js
{
  emotionKey: "tired | anxious | wronged | annoyed | happy",
  label: "疲惫",
  mouthpiece: {
    surfaceEmotion: "",
    hiddenNeed: "",
    subtext: "",
    userVoice: "",
    petResponse: ""
  },
  canvas: {
    name: "",
    surfaceVisual: "",
    tearAction: ""
  },
  card: {
    title: "",
    catDiscovery: "",
    todayHappiness: "",
    catStrokeText: "",
    shareText: ""
  },
  assets: {
    petImage: "",
    topLayer: "",
    hiddenLayer: "",
    stroke: ""
  }
}
```

## Rive 猫猫状态机接入

项目已预留 Rive 状态机接入：

```text
assets/rive/cloudcat_state_machine.rive.json
assets/rive/README.md
```

真正可运行的 Rive 文件需要用 Rive 编辑器导出二进制 `.riv` 文件。导出后放到：

```text
assets/rive/cloudcat_state_machine.riv
```

页面会自动尝试加载：

```js
./assets/rive/cloudcat_state_machine.riv
```

如果 `.riv` 存在且加载成功，主猫猫会切换为 Rive canvas 渲染；如果 `.riv` 缺失、网络无法加载 Rive runtime、或文件不可用，页面会自动回退到当前 PNG/CSS 游戏化猫猫，不影响演示。

Rive 文件需要包含：

- Artboard：`CloudCat`
- State Machine：`CloudCatMachine`
- 输入：`state`、`emotion`、`pointerX`、`pointerY`、`isPetting`
- 触发器：`listen`、`tear`、`discover`、`pet`、`sparkle`

状态值约定：

```text
0 idle
1 listen
2 low
3 hug
4 tearing
5 happy
```

情绪值约定：

```text
0 neutral
1 tired
2 anxious
3 wronged
4 annoyed
5 happy
```

## 素材目录说明

- `assets/pet/`：云光猫状态图，包括 idle、listen、hug、tearing、happy、low。
- `assets/pet_cutouts/`：从 `assets/pet/` 生成的透明背景猫猫图，用于页面展示、动效融合和 PNG 下载；原始素材仍保留不动。
- `assets/emotion_canvas/`：情绪画布表层。
- `assets/happiness_layer/`：撕开后露出的幸福底层。
- `assets/pet_strokes/`：猫猫补一笔光的叠加素材。
- `assets/card_templates/`：分享卡背景和边框素材。
- `assets/rive/`：Rive 状态机规格和后续 `.riv` 文件位置。

猫猫状态切换音效由浏览器内置 Web Audio API 实时合成，不依赖外部音频文件。当前映射包括 `idle`、`listen`、`low`、`hug`、`tearing`、`happy`、`discover`、`pet`、`save` 和 `toggle`。

请不要改动现有素材文件名和目录结构，避免破坏静态引用路径。

## 黑客松演示脚本

推荐演示输入：

1. 疲惫：我今天很累，但又停不下来。
2. 焦虑：我脑子很乱，担心很多事。
3. 委屈：我有点委屈，想哭但又说不出来。
4. 烦躁：我今天很烦，不想听别人说话。
5. 开心：今天收到一个好消息，有一点开心。

演示重点：

- 输入一句情绪。
- 猫猫读心嘴替。
- 撕开心情画布。
- 露出今日小幸福。
- 生成幸福卡。
- 保存到画廊 / 下载 PNG。

## Roadmap

- 接入后端代理的智谱 AI 情绪分析。
- 增加更多情绪与素材组合。
- 生成更个性化的小幸福卡文案。
- 支持长图分享和社交平台尺寸。
- 用 Rive 编辑器制作并导出真正的 `cloudcat_state_machine.riv`。
- 增加画廊导出和跨设备同步。
