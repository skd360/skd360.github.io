/* ============================================================
   SANATH'S PORTFOLIO — JAPANESE / ENGLISH TEXT

   EDIT TEXT HERE. No HTML knowledge required.
   - ja = Japanese text (default when site first opens)
   - en = English text (shown when visitor clicks English)
   - Keep the keys on both sides identical.
   - Company names and technical specifications live in index.html.
   ============================================================ */
const translations = {
  ja: {
    // NAVIGATION: HERE ENTER JAPANESE TAB TEXT.
    navHome: 'ホーム',
    navProjects: 'プロジェクト',
    navExperience: 'インターンシップ',
    navActivities: '活動',
    navContact: '連絡先',
    // Inside ja:
    navHobbies: '趣味',
    themeToLight: 'ライトモードに切り替え',
    themeToDark: 'ダークモードに切り替え',
    themeLight: 'ライト',
    themeDark: 'ダーク',

    // HERO: HERE ENTER JAPANESE INTRODUCTION TEXT.
    heroEyebrow: '電子通信工学 | ENGINEERING PORTFOLIO',
    heroSubtitle: '組み込みシステム、ロボティクス、フィードバック制御に興味があります。',
    heroSchool: 'ニッテ・ミーナクシ工科大学 | ベンガルール',
    exploreWork: 'プロジェクトを見る',
    viewResume: '履歴書を見る',
    addProfilePhoto: 'ここにプロフィール写真を追加',
    profileAlt: 'サナトクマル・デサイの写真',
    graduation: '卒業予定',
    internshipCount: 'インターンシップ',

    // ABOUT: HERE ENTER TEXT IN JAPANESE.
    aboutTitle: '自己紹介',
    aboutBody: '私はニッテ・ミーナクシ工科大学で電子通信工学を学ぶ5学期目の学生です。ESP32やSTM32を使った組み込みシステム、RTOS、ロボティクス、フィードバック制御に関心があります。理論を実際のシステムに応用し、試作と検証を通して学ぶことを大切にしています。',
    educationLabel: '学歴',
    educationValue: 'Nitte Meenakshi Institute of Technology · B.E. Electronics and Communication Engineering',
    languageLabel: '言語',
    languageValue: 'カンナダ語・英語・日本語（JLPT N5）',

    // SKILLS: HERE ENTER JAPANESE LABELS.
    skillsTitle: '技術スキル',
    skillProgramming: 'プログラミング',
    skillEmbedded: '組み込み・RTOS',
    skillTools: '開発ツール・インターフェース',
    skillConcepts: '関連技術',

    // PROJECTS: HERE ENTER JAPANESE PROJECT DESCRIPTIONS.
    projectsTitle: 'プロジェクト',
    projectsHint: 'プロジェクトカードをクリックするとGitHubリポジトリが開きます。',
    roverTitle: 'PID制御による静止時の方向補正ローバー',
    roverDescription: 'BNO055のヨー角をI²Cで取得し、角度誤差の正規化と差動PWMによって4モーターローバーの向きを補正しました。FreeRTOSでセンサ、制御、モーター処理を分け、配線、電源分配、バッテリーと降圧コンバーターも組み込みました。',
    micTitle: 'INMP441 MEMSマイクの接続と音声処理',
    micDescription: 'ESP32のI²SでPCM音声を取得し、UDPで受信側へ送信しました。ハイパスフィルタ、自動ゲイン制御（AGC）、バッファリング、リアルタイム音声処理を試しました。',
    viewGithub: 'GitHubで見る ↗',
    addRoverImage: 'ここにローバーの写真を追加',
    addMicImage: 'ここにマイクの写真を追加',

    // INTERNSHIPS: HERE ENTER JAPANESE INTERNSHIP DESCRIPTIONS.
    internshipTitle: 'インターンシップ',
    internshipHint: 'カードをクリックするとインターンシップの説明PDFが開きます。',
    mediglintRole: 'ハードウェア設計インターン',
    mediglintDescription: 'Onshapeで医薬品ディスペンサーのCADモデルを設計し、3Dプリントで試作と評価を行いました。ESP32、電磁石、リレーによる駆動制御と電子回路の設計・統合にも取り組みました。最終的な設計は意匠特許のために提出されました。',
    newrroRole: 'ROS 2 ロボティクスインターン',
    newrroDescription: 'RCロボットカー向けにESP32とROS 2のシリアル通信ブリッジ、ROS 2 WebSocketを使ったキーボード遠隔操作インターフェースを開発しました。社内ロボティクスライブラリのテストやArjuna Robotics Carのシステム構成の文書化も支援しました。',
    openPdf: 'プロジェクト説明PDFを見る ↗',
    addMediglintImage: 'ここに医薬品ディスペンサーの写真を追加',
    addNewrroImage: 'ここにロボットカーの写真を追加',

    // VOLUNTEERING: HERE ENTER JAPANESE EXPERIENCE TEXT.

    // OTA TOKYO: HERE ENTER JAPANESE TEXT

    volunteerRole:
      'カナポンさんの国際ゲストサポート',

    volunteerDescription:
      '約15,000人が参加したŌta TOKYO 2026で、' +
      '国際ゲスト管理チームの一員として、' +
      '日本人ゲストのカナポンさんをサポートしました。' +
      'スケジュールやステージへの移動を調整し、' +
      '雨による遅れにも対応しました。' +
      'また、観客との交流もサポートしました.',



    // HOBBIES: HERE ENTER TEXT IN JAPANESE.

    hobbiesTitle: '趣味・興味',

    hobbiesIntro: '授業以外でも、ものづくりを楽しんでいます。',

    printingTitle: '3Dプリンティング',

    printingDescription:
      '3Dプリンターを使って、アイデアを実際の形にすることが好きです。',

    cadTitle: '3D CADデザイン',

    cadDescription:
      'Onshapeを使って、3Dモデルを設計することが好きです。',

    viewCad: 'CADモデルを見る ↗',

    addPrinterImage: 'ここに3Dプリンターの写真を追加',

    addCadImage: 'ここにCADモデルの画像を追加',


    // CONTACT: HERE ENTER JAPANESE FOOTER TEXT.
    contactTitle: 'ご連絡はこちら',
    contactDescription: 'プロジェクトやエンジニアリングについて、ぜひご連絡ください。',
    resumeFooter: '履歴書 ↗',
    footerLine: '工学ポートフォリオ'
  },

  en: {
    // NAVIGATION: HERE ENTER ENGLISH TAB TEXT.
    navHome: 'Home',
    navProjects: 'Projects',
    navExperience: 'Internships',
    navActivities: 'Activities',
    navContact: 'Contact',

    // Inside en:
    navHobbies: 'Hobbies',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    themeLight: 'Light',
    themeDark: 'Dark',

    // HERO: HERE ENTER ENGLISH INTRODUCTION TEXT.
    heroEyebrow: 'ELECTRONICS & COMMUNICATION ENGINEERING',
    heroSubtitle: 'Interested in embedded systems, robotics, and feedback control.',
    heroSchool: 'Nitte Meenakshi Institute of Technology | Bengaluru',
    exploreWork: 'Explore projects',
    viewResume: 'View resume',
    addProfilePhoto: 'Add your profile photograph here',
    profileAlt: 'Portrait of Sanathkumar Desai',
    graduation: 'Expected graduation',
    internshipCount: 'Internships',

    // ABOUT: HERE ENTER ENGLISH TEXT.
    aboutTitle: 'About me',
    aboutBody: 'I am a fifth-semester Electronics and Communication Engineering student at Nitte Meenakshi Institute of Technology. I am interested in embedded systems, RTOS, robotics, and feedback control, and I enjoy applying theory through hands-on prototyping and testing with platforms such as ESP32 and STM32.',
    educationLabel: 'Education',
    educationValue: 'Nitte Meenakshi Institute of Technology · B.E. Electronics and Communication Engineering',
    languageLabel: 'Languages',
    languageValue: 'Kannada · English · Japanese (JLPT N5)',

    // SKILLS: HERE ENTER ENGLISH SKILL HEADINGS.
    skillsTitle: 'Technical skills',
    skillProgramming: 'Programming',
    skillEmbedded: 'Embedded & RTOS',
    skillTools: 'Tools & interfaces',
    skillConcepts: 'Relevant concepts',

    // PROJECTS: HERE ENTER ENGLISH PROJECT DESCRIPTIONS.
    projectsTitle: 'Selected projects',
    projectsHint: 'Select a project card to open its GitHub repository.',
    roverTitle: 'PID-Based Stationary Heading Correction Rover',
    roverDescription: 'Developed an IMU-feedback heading controller for a four-motor rover with I²C yaw readings, angular-error normalization, and differential PWM commands. Structured sensor, control, and motor functions using FreeRTOS tasks, and integrated wiring, power distribution, battery and buck converter.',
    micTitle: 'INMP441 MEMS Microphone Interfacing & Audio Processing',
    micDescription: 'Interfaced an INMP441 digital microphone using ESP32 I²S to acquire PCM audio and stream it over UDP. Experimented with high-pass filtering, automatic gain control (AGC), buffering, and real-time audio processing.',
    viewGithub: 'View on GitHub ↗',
    addRoverImage: 'Add your rover photograph here',
    addMicImage: 'Add your microphone photograph here',

    // INTERNSHIPS: HERE ENTER ENGLISH INTERNSHIP DESCRIPTIONS.
    internshipTitle: 'Internship experience',
    internshipHint: 'Select an internship card to open its project-explanation PDF.',
    mediglintRole: 'Hardware Design Intern',
    mediglintDescription: 'Designed a medicine-dispenser CAD model in Onshape, evaluated iterative 3D-printed prototypes, and developed ESP32-controlled actuation with electromagnets and relays. Designed and integrated the electronics; the final system design was submitted for a design patent.',
    newrroRole: 'ROS 2 Robotics Intern',
    newrroDescription: 'Developed an ESP32–ROS 2 serial communication bridge and a ROS 2 WebSocket keyboard teleoperation interface for an RC robotic car. Assisted with testing internal robotics libraries and documenting Arjuna Robotics Car architecture and workflows.',
    openPdf: 'View project PDF ↗',
    addMediglintImage: 'Add medicine-dispenser photograph here',
    addNewrroImage: 'Add robotics car photograph here',


// OTA TOKYO: HERE ENTER ENGLISH TEXT

volunteerRole:
  'International Guest Management Volunteer — Miss Kanapon',

volunteerDescription:
  'At Ōta TOKYO 2026, an event attended by approximately ' +
  '15,000 people, I was part of the International Guest ' +
  'Management team and assisted Japanese guest performer ' +
  'Miss Kanapon. I helped coordinate her schedule and ' +
  'stage movements, adapted to rain-related delays, ' +
  'and supported interactions with the audience.',



    // HOBBIES: HERE ENTER TEXT IN ENGLISH.

    hobbiesTitle: 'Hobbies & Interests',

    hobbiesIntro: 'I enjoy exploring hands-on engineering beyond academics.',

    printingTitle: '3D Printing',

    printingDescription:
      'I enjoy using 3D printing to turn ideas and designs into physical objects.',

    cadTitle: '3D CAD Design',

    cadDescription:
      'I enjoy designing and exploring 3D models using Onshape.',

    viewCad: 'Explore my CAD designs ↗',

    addPrinterImage: 'Add a photograph of your 3D printer',

    addCadImage: 'Add an image of your CAD model',


    // CONTACT: HERE ENTER ENGLISH FOOTER TEXT.
    contactTitle: 'Let’s connect.',
    contactDescription: 'Feel free to get in touch about engineering and project work.',
    resumeFooter: 'Resume ↗',
    footerLine: 'Engineering portfolio'
  }
};

let currentLanguage = 'ja';

/* ============================================================
   LANGUAGE SWITCHING LOGIC — NO NEED TO MODIFY THIS SECTION.
   Japanese is deliberately the default each time the page loads.
   ============================================================ */
function setLanguage(language) {
  const words = translations[language];
  document.documentElement.lang = language;
  currentLanguage = language;
  updateThemeButton();
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (Object.prototype.hasOwnProperty.call(words, key)) element.textContent = words[key];
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const key = element.getAttribute('data-i18n-alt');
    if (Object.prototype.hasOwnProperty.call(words, key)) element.alt = words[key];
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    const selected = button.dataset.language === language;
    button.classList.toggle('is-active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});
setLanguage('ja'); // DEFAULT LANGUAGE: Change to 'en' only if you want English first.


/* ============================================================
   DARK / LIGHT MODE — HERE YOU CAN CHANGE DEFAULT THEME.
   The first visit defaults to 'dark' (see small script in index.html).
   Visitors' preferences are saved using localStorage if available.
   Theme button labels automatically follow Japanese/English mode.
   ============================================================ */
function updateThemeButton() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  const isDark = document.documentElement.dataset.theme === 'dark';
  const text = translations[currentLanguage];
  const label = isDark ? text.themeToLight : text.themeToDark;

  button.querySelector('.theme-icon').textContent = isDark ? '☀' : '☾';
  button.querySelector('.theme-label').textContent = isDark ? text.themeLight : text.themeDark;
  button.setAttribute('aria-label', label);
  button.setAttribute('title', label);
  button.setAttribute('aria-pressed', String(isDark));
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem('sanath-portfolio-theme', theme);
  } catch (error) {
    // Local file / private browsing may block storage. Toggle still works.
  }
  updateThemeButton();
}

document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  setTheme(isDark ? 'light' : 'dark');
});

// Refresh the button after setup (Japanese is still the default language).
updateThemeButton();
