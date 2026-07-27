// Legal page content for Toul Tompong Market (Russian Market)
// Three languages: km (Khmer), en (English), zh (Chinese).
// Content is fixed legal text; translations provided for en/zh.
// Khmer (km) text is machine-assisted and should be reviewed by a native speaker before launch.

export type LegalBlock = { heading?: string; paragraphs: string[] };

export type LegalDoc = {
  updated: string;
  blocks: LegalBlock[];
};

export const privacyPolicy: Record<string, LegalDoc> = {
  zh: {
    updated: '2026年7月',
    blocks: [
      {
        heading: '我们收集的信息',
        paragraphs: [
          '我们仅收集提供服务所必需的最低限度数据。这些数据可能包括：',
          '浏览数据（IP 地址、浏览器类型、访问页面）；',
          'Cookie 和类似技术；',
          '您通过联系表格或电子邮件自愿提供的任何信息。',
        ],
      },
      {
        heading: '我们如何使用您的信息',
        paragraphs: [
          '我们使用收集到的信息用于：',
          '改善网站内容和用户体验；',
          '分析流量和使用模式；',
          '回应请求；',
          '遵守我们的法律义务。',
        ],
      },
      {
        heading: '第三方服务',
        paragraphs: [
          '我们的网站可能会使用第三方服务，例如谷歌地图（用于嵌入式地图和位置数据）、谷歌分析（用于流量分析）和 Unsplash（用于图片）。这些服务均有各自的隐私政策。',
        ],
      },
      {
        heading: '您的权利',
        paragraphs: [
          '根据《通用数据保护条例》(GDPR) 及相关法规，您享有以下权利：',
          '访问您的个人数据；',
          '要求更正或删除；',
          '反对处理；',
          '向监管机构提出投诉。',
        ],
      },
    ],
  },
  en: {
    updated: 'July 2026',
    blocks: [
      {
        heading: 'Information We Collect',
        paragraphs: [
          'We collect only the minimum data necessary to provide our service. This may include:',
          'Browsing data (IP address, browser type, pages visited);',
          'Cookies and similar technologies;',
          'Any information you voluntarily provide through a contact form or email.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        paragraphs: [
          'We use the information collected to:',
          'Improve our website content and user experience;',
          'Analyse traffic and usage patterns;',
          'Respond to requests;',
          'Comply with our legal obligations.',
        ],
      },
      {
        heading: 'Third-Party Services',
        paragraphs: [
          'Our website may use third-party services such as Google Maps (for embedded maps and location data), Google Analytics (for traffic analysis) and Unsplash (for images). These services have their own privacy policies.',
        ],
      },
      {
        heading: 'Your Rights',
        paragraphs: [
          'Under the General Data Protection Regulation (GDPR) and related laws, you have the right to:',
          'Access your personal data;',
          'Request correction or deletion;',
          'Object to processing;',
          'Lodge a complaint with a supervisory authority.',
        ],
      },
    ],
  },
  km: {
    updated: 'កក្កដា 2026',
    blocks: [
      {
        heading: 'ព័ត៌មានដែលយើងប្រមូល',
        paragraphs: [
          'យើងប្រមូលតែទិន្នន័យអប្បបរមាដែលចាំបាច់សម្រាប់ការផ្តល់សេវាកម្ម។ នេះអាចរួមមាន៖',
          'ទិន្នន័យការរុករក (អាសយដ្ឋាន IP ប្រភេទកម្មវិធីរុករក ទំព័រដែលបានចូលមើល)។',
          'ខូគី និងបច្ចេកវិទ្យាស្រដៀងគ្នា។',
          'ព័ត៌មានណាមួយដែលអ្នកផ្តល់ដោយស្ម័គ្រចិត្តតាមរយៈបែបបទទំនាក់ទំនង ឬអ៊ីមែល។',
        ],
      },
      {
        heading: 'របៀបដែលយើងប្រើប្រាស់ព័ត៌មានរបស់អ្នក',
        paragraphs: [
          'យើងប្រើប្រាស់ព័ត៌មានដែលបានប្រមូលដើម្បី៖',
          'កែលម្អខ្លឹមសារគេហទំព័រ និងបទពិសោធន៍អ្នកប្រើប្រាស់។',
          'វិភាគចរាចរ និងលំនាំការប្រើប្រាស់។',
          'ឆ្លើយតបនឹងសំណើ។',
          'គោរពតាមកាតព្វកិច្ចផ្លូវច្បាប់របស់យើង។',
        ],
      },
      {
        heading: 'សេវាកម្មភាគីទីបី',
        paragraphs: [
          'គេហទំព័ររបស់យើងអាចប្រើប្រាស់សេវាកម្មភាគីទីបី ដូចជា Google Maps (សម្រាប់ផែនទីបង្កប់ និងទិន្នន័យទីតាំង) Google Analytics (សម្រាប់វិភាគចរាចរ) និង Unsplash (សម្រាប់រូបភាព)។ សេវាកម្មទាំងនេះមានគោលការណ៍ឯកជនរៀងៗខ្លួន។',
        ],
      },
      {
        heading: 'សិទ្ធិរបស់អ្នក',
        paragraphs: [
          'បើយោងតាមបទប្បញ្ញត្តិទូទៅស្តីពីការការពារទិន្នន័យ (GDPR) និងច្បាប់ពាក់ព័ន្ធ អ្នកមានសិទ្ធិ៖',
          'ចូលប្រើទិន្នន័យផ្ទាល់ខ្លួនរបស់អ្នក។',
          'ស្នើសុំការកែតម្រូវ ឬលុប។',
          'ជំទាស់នឹងការដំណើរការ។',
          'ដាក់បណ្តឹងទៅអាជ្ញាធរត្រួតពិនិត្យ។',
        ],
      },
    ],
  },
};

export const termsOfService: Record<string, LegalDoc> = {
  zh: {
    updated: '2026年7月',
    blocks: [
      {
        paragraphs: [
          '访问和使用本网站，即表示您同意受这些服务条款的约束。',
        ],
      },
      {
        heading: '内容使用',
        paragraphs: [
          '本网站所有内容仅供参考。我们是一家独立的第三方旅游信息网站，与任何旅游景点、政府机构或商业运营商均无关联。',
        ],
      },
      {
        heading: '信息的准确性',
        paragraphs: [
          '我们力求提供准确及时的信息，但无法保证信息的完整性或准确性。行程安排、条件和服务如有变更，恕不另行通知。请务必在出行前通过官方渠道核实重要信息。',
        ],
      },
      {
        heading: '知识产权',
        paragraphs: [
          '本网站设计和原创内容受版权保护。图片来自 Unsplash，并已获得其许可。Google 地图数据的使用符合 Google 的服务条款。',
        ],
      },
      {
        heading: '责任限制',
        paragraphs: [
          '本网站按"现状"提供，不作任何担保。对于因使用本网站信息而造成的任何损失，包括但不限于基于本网站内容做出的旅行决定，我们概不负责。',
        ],
      },
    ],
  },
  en: {
    updated: 'July 2026',
    blocks: [
      {
        paragraphs: [
          'By accessing and using this website, you agree to be bound by these Terms of Service.',
        ],
      },
      {
        heading: 'Content Use',
        paragraphs: [
          'All content on this website is provided for informational purposes only. We are an independent third-party travel information website and are not affiliated with any tourist attraction, government agency or commercial operator.',
        ],
      },
      {
        heading: 'Accuracy of Information',
        paragraphs: [
          'We strive to provide accurate and up-to-date information, but we cannot guarantee its completeness or accuracy. Itineraries, conditions and services may change without notice. Please always verify important information through official channels before travelling.',
        ],
      },
      {
        heading: 'Intellectual Property',
        paragraphs: [
          'The design and original content of this website are protected by copyright. Images are from Unsplash and used under their licence. Use of Google Maps data is subject to Google\'s Terms of Service.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        paragraphs: [
          'This website is provided "as is" without any warranties. We are not liable for any loss arising from the use of information on this website, including but not limited to travel decisions made based on its content.',
        ],
      },
    ],
  },
  km: {
    updated: 'កក្កដា 2026',
    blocks: [
      {
        paragraphs: [
          'ដោយចូលប្រើ និងប្រើប្រាស់គេហទំព័រនេះ អ្នកយល់ព្រមថាត្រូវបានចងភ្ជាប់ដោយលក្ខខណ្ឌសេវាកម្មទាំងនេះ។',
        ],
      },
      {
        heading: 'ការប្រើប្រាស់មាតិកា',
        paragraphs: [
          'មាតិកាទាំងអស់នៅលើគេហទំព័រនេះត្រូវបានផ្តល់សម្រាប់គោលបំណងព័ត៌មានប៉ុណ្ណោះ។ យើងគឺជាគេហទំព័រព័ត៌មានទេសចរណ៍ភាគីទីបីឯករាជ្យ ហើយមិនមានទំនាក់ទំនងជាមួយរមណីយដ្ឋានទេសចរណ៍ អង្គការរដ្ឋាភិបាល ឬអ្នកប្រតិបត្តិករពាណិជ្ជកម្មណាមួយឡើយ។',
        ],
      },
      {
        heading: 'ភាពត្រឹមត្រូវនៃព័ត៌មាន',
        paragraphs: [
          'យើងខិតខំផ្តល់ព័ត៌មានដែលត្រឹមត្រូវ និងទាន់សម័យ ប៉ុន្តែយើងមិនអាចធានានូវភាពពេញលេញ ឬត្រឹមត្រូវរបស់វាបានទេ។ ការរៀបចំដំណើរ លក្ខខណ្ឌ និងសេវាកម្មអាចផ្លាស់ប្តូរដោយមិនផ្តល់ដំណឹងជាមុន។ សូមផ្ទៀងផ្ទាត់ព័ត៌មានសំខាន់តាមរយៈបណ្តាញផ្លូវការជានិច្ចមុនពេលធ្វើដំណើរ។',
        ],
      },
      {
        heading: 'ទ្រព្យបញ្ញា',
        paragraphs: [
          'ការរចនា និងមាតិកាដើមនៃគេហទំព័រនេះត្រូវបានការពារដោយរបាំងសិទ្ធិអ្នកនិពន្ធ។ រូបភាពមកពី Unsplash និងបានប្រើប្រាស់ក្រោមអាជ្ញាបណញរបស់ពួកគេ។ ការប្រើប្រាស់ទិន្នន័យ Google Maps គោរពតាមលក្ខខណ្ឌសេវាកម្មរបស់ Google។',
        ],
      },
      {
        heading: 'ដែនកំណត់ទំនួលខុសត្រូវ',
        paragraphs: [
          'គេហទំព័រនេះត្រូវបានផ្តល់ជា "ដូចដែលមាន" ដោយគ្មានការធានាណាមួយ។ យើងមិនទទួលខុសត្រូវចំពោះការបាត់បង់ណាមួយដែលកើតមានឡើងដោយសារការប្រើប្រាស់ព័ត៌មាននៅលើគេហទំព័រនេះ រួមទាំងប៉ុន្តែមិនកំណត់ត្រឹមការសម្រេចចិត្តធ្វើដំណើរដែលផ្អែកលើមាតិការបស់វា។',
        ],
      },
    ],
  },
};

// Cookie settings: structured so the page can render toggle rows + action buttons.
export type CookieCategory = {
  key: string;
  title: string;
  desc: string;
  provider?: string;
  defaultOn: boolean;
  locked?: boolean; // necessary cookies cannot be disabled
};

export const cookieSettings: Record<string, {
  updated: string;
  intro: string;
  categories: CookieCategory[];
  consentMgmt: string;
  note: string;
  saveLabel: string;
  rejectAllLabel: string;
}> = {
  zh: {
    updated: '2026年7月',
    intro: '我们使用 Cookie 来改善您的浏览体验。您可以在下方管理您的偏好设置。',
    categories: [
      {
        key: 'necessary',
        title: '必要 Cookie',
        desc: '这些 Cookie 对于网站正常运行至关重要，无法禁用。',
        defaultOn: true,
        locked: true,
      },
      {
        key: 'analytics',
        title: '分析型 Cookie',
        desc: '它们通过收集匿名使用数据，帮助我们了解访客如何与我们的网站互动。',
        provider: 'Google Analytics',
        defaultOn: true,
      },
      {
        key: 'preferences',
        title: '偏好 Cookie',
        desc: '它们会记住您的设置，例如语言和主题偏好。',
        provider: '用户偏好',
        defaultOn: true,
      },
      {
        key: 'marketing',
        title: '营销 Cookie',
        desc: '它们用于展示相关广告并衡量广告活动的有效性。',
        provider: '个性化广告',
        defaultOn: false,
      },
    ],
    consentMgmt: '您可以随时更改您的 Cookie 设置。请注意，禁用某些 Cookie 可能会影响网站的功能。',
    note: '本页面仅为偏好设置演示，当前为静态网站，选择不会被持久保存。',
    saveLabel: '保存偏好设置',
    rejectAllLabel: '拒绝一切',
  },
  en: {
    updated: 'July 2026',
    intro: 'We use cookies to improve your browsing experience. You can manage your preferences below.',
    categories: [
      {
        key: 'necessary',
        title: 'Necessary Cookies',
        desc: 'These cookies are essential for the website to function and cannot be disabled.',
        defaultOn: true,
        locked: true,
      },
      {
        key: 'analytics',
        title: 'Analytics Cookies',
        desc: 'They help us understand how visitors interact with our website by collecting anonymous usage data.',
        provider: 'Google Analytics',
        defaultOn: true,
      },
      {
        key: 'preferences',
        title: 'Preference Cookies',
        desc: 'They remember your settings, such as language and theme preferences.',
        provider: 'User Preferences',
        defaultOn: true,
      },
      {
        key: 'marketing',
        title: 'Marketing Cookies',
        desc: 'They are used to show relevant ads and measure the effectiveness of ad campaigns.',
        provider: 'Personalized Ads',
        defaultOn: false,
      },
    ],
    consentMgmt: 'You can change your cookie settings at any time. Please note that disabling certain cookies may affect website functionality.',
    note: 'This page is a preference demonstration only; as this is a static site, choices are not persisted.',
    saveLabel: 'Save Preferences',
    rejectAllLabel: 'Reject All',
  },
  km: {
    updated: 'កក្កដា 2026',
    intro: 'យើងប្រើប្រាស់ខូគីដើម្បីកែលម្អបទពិសោធន៍ការរុករករបស់អ្នក។ អ្នកអាចគ្រប់គ្រងចំណូលចិត្តរបស់អ្នកខាងក្រោម។',
    categories: [
      {
        key: 'necessary',
        title: 'ខូគីចាំបាច់',
        desc: 'ខូគីទាំងនេះមានសារៈសំខាន់សម្រាប់ប្រតិបត្តិការគេហទំព័រ ហើយមិនអាចបិទបានទេ។',
        defaultOn: true,
        locked: true,
      },
      {
        key: 'analytics',
        title: 'ខូគីវិភាគ',
        desc: 'ពួកវាជួយយើងយល់ពីរបៀបដែលអ្នកទស្សនាអន្តរកម្មជាមួយគេហទំព័ររបស់យើងតាមរយៈការប្រមូលទិន្នន័យការប្រើប្រាស់អនាមិក។',
        provider: 'Google Analytics',
        defaultOn: true,
      },
      {
        key: 'preferences',
        title: 'ខូគីចំណូលចិត្ត',
        desc: 'ពួកវាចងចាំការកំណត់របស់អ្នក ដូចជាភាសា និងចំណូលចិត្តស្ប៉ូអ្នក។',
        provider: 'ចំណូលចិត្តអ្នកប្រើ',
        defaultOn: true,
      },
      {
        key: 'marketing',
        title: 'ខូគីទីផ្សារ',
        desc: 'ពួកវាត្រូវបានប្រើប្រាស់ដើម្បីបង្ហាញការផ្សព្វផ្សាយពាក់ព័ន្ធ និងវាស់វែងប្រសិទ្ធភាពយុទ្ធនាការផ្សព្វផ្សាយ។',
        provider: 'ការផ្សព្វផ្សាយផ្ទាល់ខ្លួន',
        defaultOn: false,
      },
    ],
    consentMgmt: 'អ្នកអាចផ្លាស់ប្តូរការកំណត់ខូគីរបស់អ្នកបានគ្រប់ពេល។ សូមចំណាំថា ការបិទខូគីមួយចំនួនអាចប៉ះពាល់ដល់មុខងារគេហទំព័រ។',
    note: 'ទំព័រនេះគឺជាតែការបង្ហាញចំណូលចិត្តប៉ុណ្ណោះ ហើយដោយសារជាគេហទំព័រថាត់ ការជ្រើសរើសមិនត្រូវបានរក្សាទុកទេ។',
    saveLabel: 'រក្សាទុកចំណូលចិត្ត',
    rejectAllLabel: 'បដិសេធទាំងអស់',
  },
};
