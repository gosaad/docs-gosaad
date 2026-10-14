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
        'administrator/persiapan/kapita-selekta',
      ],
    },
    {
      type: 'category',
      label: 'Pelaksanaan',
      items: [
        'administrator/pelaksanaan/tambah-jadwal',
        'administrator/pelaksanaan/token-ujian',
        'administrator/pelaksanaan/dokumen-ujian',
        'administrator/pelaksanaan/login-peserta',
        'administrator/pelaksanaan/monitor-peserta',
        'administrator/pelaksanaan/ujian-peserta',
      ],
    },
    {
      type: 'category',
      label: 'Evaluasi',
      items: [
        'administrator/evaluasi/koreksi',
        'administrator/evaluasi/hasil-ujian',
        'administrator/evaluasi/ledger-hasil-peserta',
        'administrator/evaluasi/summary-bank-soal',
      ],
    },
    {
      type: 'category',
      label: 'IRT',
      items: ['administrator/irt/person'],
    },
    {
      type: 'category',
      label: 'Akses & Sistem',
      items: [
        'administrator/akses-sistem/pengguna',
        'administrator/akses-sistem/hak-akses',
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
