export default {
  entity: {
    id: '8a7cb72f-91f6-41e7-803a-c7bca12b66f0',
    name: '南通情况',
    internal: false,
    type: 'img',
    official: false,
    author: '南通市革命委员会办事组',
    files: [
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8a7cb72f-91f6-41e7-803a-c7bca12b66f0/1.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8a7cb72f-91f6-41e7-803a-c7bca12b66f0/2.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8a7cb72f-91f6-41e7-803a-c7bca12b66f0/3.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8a7cb72f-91f6-41e7-803a-c7bca12b66f0/4.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8a7cb72f-91f6-41e7-803a-c7bca12b66f0/5.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8a7cb72f-91f6-41e7-803a-c7bca12b66f0/6.jpg',
      'https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives16/main/8a7cb72f-91f6-41e7-803a-c7bca12b66f0/7.jpg',
    ],
  },
  parser_option: {
    articles: [
      {
        title: '杨广立等人追随“四人帮”背叛“三要三不要”的基本原则结帮营私 结帮篡党罪责难逃',
        authors: [
          '南通市革命委员会办事组',
        ],
        page_start: 1,
        page_end: 3,
        dates: [
          {
            year: 1977,
            month: 3,
            day: 25,
          },
        ],
      },
      {
        title: '批判“四人帮”搞帮派同志的罪行 加强党的一元化领导',
        authors: [
          '南通市革命委员会办事组',
        ],
        page_start: 3,
        page_end: 4,
        dates: [
          {
            year: 1977,
            month: 3,
            day: 25,
          },
        ],
      },
      {
        title: '“四人帮”借反对“唯生产力论”破坏革命和生产',
        authors: [
          '南通市革命委员会办事组',
        ],
        page_start: 4,
        page_end: 4,
        dates: [
          {
            year: 1977,
            month: 3,
            day: 25,
          },
        ],
      },
      {
        title: '批深批透“四人帮”搞“三反一砍”的罪行',
        authors: [
          '南通市革命委员会办事组',
        ],
        page_start: 5,
        page_end: 5,
        dates: [
          {
            year: 1977,
            month: 3,
            day: 25,
          },
        ],
      },
      {
        title: '深入揭批“四人帮” 迈开大步学大庆',
        authors: [
          '南通市革命委员会办事组',
        ],
        page_start: 5,
        page_end: 6,
        dates: [
          {
            year: 1977,
            month: 3,
            day: 25,
          },
        ],
      },
      {
        title: '“四人帮”是煽动无政府主义的罪魁祸首',
        authors: [
          '南通市革命委员会办事组',
        ],
        page_start: 6,
        page_end: 7,
        dates: [
          {
            year: 1977,
            month: 3,
            day: 25,
          },
        ],
      },
    ],
    ocr: {
      use_onnx: true,
      det_model_dir: './paddle/onnx/ch_PP-OCRv4_det_infer.onnx',
      rec_model_dir: './paddle/onnx/ch_PP-OCRv4_rec_infer.onnx',
    },
  },
  parser_id: 'automation',
  path: '8a7cb72f-91f6-41e7-803a-c7bca12b66f0',
  resource_type: 'book',
  version: 2,
};