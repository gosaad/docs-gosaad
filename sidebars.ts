import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  panduanSidebar: [
    {
      type: 'category',
      label: 'Mulai di sini',
      items: ['intro', 'mulai-di-sini/aplikasi-desktop'],
    },
    {
      type: 'category',
      label: 'Administrator',
      items: [
        'administrator/login',
        'administrator/menu-administrator',
      ],
    },
    {
      type: 'category',
      label: 'Data master',
      items: [
        'administrator/data-master/index',
        'administrator/data-master/peserta',
        'administrator/data-master/tambah-peserta',
        'administrator/data-master/upload-data-peserta',
        'administrator/data-master/group',
        'administrator/data-master/jurusan',
        'administrator/data-master/agama',
        'administrator/data-master/matpel',
      ],
    },
    {
      type: 'category',
      label: 'Persiapan',
      items: [
        'administrator/persiapan/event',
        'administrator/persiapan/kompetensi',
        'administrator/persiapan/bank-soal',
      ],
    },
    {
      type: 'category',
      label: 'Peserta',
      items: ['peserta/login'],
    },
  ],
};

export default sidebars;
