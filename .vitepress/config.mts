import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Spark КФУ Дата Челлендж",
  description: "A documentation for KPFU Data Challenge dataset model",
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Документация', link: '/data-model/index.md' }
    ],

    sidebar: [
      {
        text: 'Модель данных',
        link: '/data-model/index.md',
        items: [
          {
            text: 'Образование',
            link: '/data-model/education/index.md',
            items: [
              { text: 'Студенты', link: '/data-model/education/students.md' },
              { text: 'Успеваемость', link: '/data-model/education/performance.md' },
              { text: 'Сотрудники', link: '/data-model/education/employee.md' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/spark-kdc/docs' }
    ],

    search: {
      provider: 'local'
    }
  }
})
