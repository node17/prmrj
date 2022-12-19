import React, { useState } from 'react';
import { Layout, Menu, ConfigProvider, Button, Dropdown, message, Space, Descriptions, Breadcrumb, Card   } from 'antd';
import { HomeOutlined, PrinterOutlined, FileSearchOutlined, FormOutlined, HistoryOutlined, SnippetsOutlined,FileOutlined, DownOutlined, UserOutlined, DatabaseOutlined, EditOutlined, ForkOutlined, DoubleLeftOutlined,CarOutlined ,FolderOpenOutlined,LayoutOutlined, SettingOutlined, BookOutlined, } from '@ant-design/icons';
import './App.css'; // Tell webpack that Button.js uses these styles
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem';
const { Header, Footer, Sider, Content } = Layout;

const handleButtonClick = (e) => {
  message.info('Click on left button.');
  console.log('click left button', e);
};
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: 'Dashboard',
    key: '1',
    icon: <LayoutOutlined />,
  },
  {
    label: 'Registrasi Pasien',
    key: '2',
    icon: <BookOutlined />,
  },
  {
    label: 'Pelayanan Pasien',
    key: '3',
    icon: <ForkOutlined />,
  },
  {
    label: 'PPI / Surveilens Infeksi',
    key: 'mail',
    icon: <EditOutlined />,
  },
  {
    label: 'Data / Informasi',
    key: 'app',
    icon: <DatabaseOutlined />,
    
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
    
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay',
    disabled: true,
  },
];

const profilemenu = [
  {
    label: 'Profile',
    key: '11',
    icon: <LayoutOutlined />,
  },
  {
    label: 'Settings',
    key: '21',
    icon: <BookOutlined />,
  },
  {
    label: 'LogOut',
    key: '31',
    icon: <ForkOutlined />,
  },

];

const menuProps = {
  profilemenu,
  onClick: handleMenuClick,
};
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }; 
  return (
    
  <Layout>
<React.Fragment>
    <Header style={{backgroundColor: "#f7d263", display : "flex"}}>
      
          <h3 style={{display: "flex", justifyContent: "flex-start", marginTop: "auto", marginLeft: "none", color : "white", textAlign: "left"}}>
            SISTEM INFORMASI RUMAH SAKIT
          </h3>
          <h3 style={{display: "flex", justifyContent: "space-between",margin: "auto", color : "white"}}>
            RUMAH SAKIT X
          </h3>

          <Dropdown menu={{items}}>
      
      <Button  style={{backgroundColor: "#fae4a4", marginTop: "auto", marginBottom:"auto", marginRight: "none", display: "flex",justifyContent: "flex-end"}}>
      <UserOutlined style={{margin : "auto"}}/>
          <span>Zahra Admin</span>
      <DownOutlined style={{marginTop : "auto", marginBottom:"auto", marginRight: "none"}}/>
        
      </Button>
    </Dropdown>
    
      </Header>
  
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
      </React.Fragment>
      <div style={{marginTop:"10px", marginBottom:"15px"}}>
      <div class="nav" style={{marginLeft: "15px" , marginRight: "auto", marginTop:"auto",display : "flex"}} >
      <Button size="small" type="primary" style={{backgroundColor: "#FE9F23", marginRight:"10px", }} icon={<DoubleLeftOutlined />}><span style={{}}>Kembali</span></Button>
      <span style={{marginTop:"auto", marginBottom:"auto", fontWeight:"bold"}}>Pelayanan Rawat Jalan</span>
      <div class="rectangle" style={{borderRadius:"25px", backgroundColor:"#cbc7c6 ",marginLeft: "auto" , marginRight: "15px", marginTop:"auto", display : "flex"}}>
        <div style={{display:"flex"}}>
      <Breadcrumb separator=">">
    <Breadcrumb.Item href="" style={{marginLeft : "5px"}}>
      <HomeOutlined />
      <span>Dashboard</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
    <FolderOpenOutlined />
      <span>Modul Pelayanan Pasien</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item href="">
    <CarOutlined />
      <span>Rawat Jalan</span>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Pelayanan Rawat Jalan</Breadcrumb.Item>
    <Breadcrumb.Item style={{marginRight : "5px"}}>Form</Breadcrumb.Item>
  </Breadcrumb>
    </div>
  </div>
  </div>
  </div>       
  
      <Content style={{background:"white"}}>
        <div style={{margin:"25px"}}>
          <h1>Rekam Medik Pasien</h1>
        <Card
      size="small"
      title="Pelayanan Rawat Jalan : JANTUNG DAN PEMBULUH DARAH (Rawat Jalan)"
      style={{
        width: "auto", boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"
      }}
    >
     <Descriptions >
    <Descriptions.Item label="No. Reg &nbsp;&nbsp;" span={2}>&nbsp;&nbsp; 001230486529</Descriptions.Item>
    <Descriptions.Item label="Dokter PJ Pasien &nbsp;&nbsp;">&nbsp;&nbsp;dr. Sulaiman, Sp. PD</Descriptions.Item>
    <Descriptions.Item label="NIK &nbsp;&nbsp;" span={2}>&nbsp;&nbsp;332982627731000001</Descriptions.Item>
    <Descriptions.Item label="Umur &nbsp;&nbsp;">&nbsp;&nbsp;36</Descriptions.Item>
    <Descriptions.Item label="No. RM &nbsp;&nbsp;" span={2}>&nbsp;&nbsp;003982</Descriptions.Item>
    <Descriptions.Item label="Jenis Kelamin&nbsp;&nbsp;">&nbsp;&nbsp; Perempuan</Descriptions.Item>
    <Descriptions.Item label="Nama Pasien&nbsp;&nbsp;" span={2}>&nbsp;&nbsp; Indah Permatasari</Descriptions.Item>
    <Descriptions.Item label="Jenis/Kedatangan&nbsp;&nbsp;">&nbsp;&nbsp; BPJS/Datang Sendiri</Descriptions.Item>
    <Descriptions.Item label="Alamat Pasien&nbsp;&nbsp;" span={2}>&nbsp;&nbsp; Komplek Mega Blok A No.001, Karangduren, Kab. Cilacap, Jawa Tengah</Descriptions.Item>
    <Descriptions.Item label="Alergi&nbsp;&nbsp;">&nbsp;&nbsp; Tidak ada</Descriptions.Item>
  </Descriptions>
    </Card>
    <Space direction="vertical" style={{marginTop:"15px" }}>
    <Space>
      <Button icon={<PrinterOutlined />}>CETAK KARTU</Button>
      <Button icon={<FileOutlined />}>GENERAL CONSENT</Button>
      <Button icon={<ForkOutlined/>}>PEMERIKSAAN FISIK</Button>
      <Button icon={<SnippetsOutlined />}>ASSESMEN MEDIS</Button>
      <Button icon={<SnippetsOutlined />}>ASSESMEN KEPERAWATAN</Button>
      <Button icon={<SnippetsOutlined />}>ASSESMEN AWAL NAPZA</Button>
      <Button icon={<FileSearchOutlined />}>DIAGNOSIS (ICD-10)</Button>
      <Button icon={<SnippetsOutlined />}>CPPT</Button>
      <Button icon={<SnippetsOutlined />}>TINDAKAN</Button>
      <Button icon={<SnippetsOutlined />}>RESEP</Button>
    </Space>
    <Space>
      <Button icon={<FormOutlined />}>UPDATE PASIEN</Button>
      <Button icon={<UserOutlined />}>PENUNJANG</Button>
      <Button icon={<ForkOutlined/>}>KONSULTASI</Button>
      <Button icon={<CarOutlined />}>TINDAK LANJUT</Button>
      <Button type="primary"icon={<SnippetsOutlined />} style={{backgroundColor: "#FE9F23"}}>PRMRJ</Button>
      <Button icon={<HistoryOutlined />}>DATA HISTORY</Button>
    </Space>
    </Space>
    </div>    
        </Content>
      <Footer>Copyright</Footer>
      
    </Layout>
    );
   
};
export default App;