import React, { useState } from 'react';
import { Layout, Menu, ConfigProvider, Button, Dropdown, message, Space, Descriptions, Breadcrumb, Card ,Table, Modal, Input  } from 'antd';
import { HomeOutlined,DeleteOutlined , PrinterOutlined, AntDesignOutlined,FileSearchOutlined, CopyrightOutlined, PlusOutlined, FormOutlined, HistoryOutlined, SnippetsOutlined,FileOutlined, DownOutlined, UserOutlined, DatabaseOutlined, EditOutlined, ForkOutlined, DoubleLeftOutlined,CarOutlined ,FolderOpenOutlined,LayoutOutlined, SettingOutlined, BookOutlined, } from '@ant-design/icons';
import './App.css'; // Tell webpack that Button.js uses these styles
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem';
const { Header, Footer, Sider, Content , profilemenu} = Layout;

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



const menuProps = {
  profilemenu,
  onClick: handleMenuClick,
};
function App() {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  }; 
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      date: "21/12/2022",
      klinik: "JANTUNG DAN PEMBULUH DARAH",
      alergi: "udang",
      diagnosa: "Jantung Koroner",
      kode: "7",
      obat: "-",
      tindakan: "Operasi",
      dokter: "dr. Sulaiman, Sp. PD",
    },
    {
      id: 2,
      date: "21/12/2022",
      klinik: "JANTUNG DAN PEMBULUH DARAH",
      alergi: "udang",
      diagnosa: "Jantung Koroner",
      kode: "7",
      obat: "-",
      tindakan: "Operasi",
      dokter: "dr. Sulaiman, Sp. PD",
    },
    {
      id: 3,
      date: "21/12/2022",
      klinik: "JANTUNG DAN PEMBULUH DARAH",
      alergi: "udang",
      diagnosa: "Jantung Koroner",
      kode: "7",
      obat: "-",
      tindakan: "Operasi",
      dokter: "dr. Sulaiman, Sp. PD",
    },
    {
      id: 4,
      date: "21/12/2022",
      klinik: "JANTUNG DAN PEMBULUH DARAH",
      alergi: "udang",
      diagnosa: "Jantung Koroner",
      kode: "7",
      obat: "-",
      tindakan: "Operasi",
      dokter: "dr. Sulaiman, Sp. PD",
    },
  ]);
  const columns = [
    {
      key: "1",
      title: "NO",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Tgl. Registrasi",
      dataIndex: "date",
    },
    {
      key: "3",
      title: "Klinik yang dikunjungi",
      dataIndex: "klinik",
    },
    {
      key: "4",
      title: "Alergi",
      dataIndex: "alergi",
    },
    {
      key: "5",
      title: "Diagnosa",
      dataIndex: "diagnosa",
    },
    {
      key: "6",
      title: "Kode ICD 10",
      dataIndex: "kode",
    },
    {
      key: "7",
      title: "Pengobatan saat ini",
      dataIndex: "obat",
    },
    {
      key: "8",
      title: "Tindakan",
      dataIndex: "tindakan",
    },
    {
      key: "9",
      title: "Nama Dokter",
      dataIndex: "dokter",
    },
    {
      key: "10",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: "99+",
      date: "21/12/2022",
      klinik: "JANTUNG DAN PEMBULUH DARAH",
      alergi: "udang",
      diagnosa: "Jantung Koroner",
      kode: "7",
      obat: "-",
      tindakan: "Operasi",
      dokter: "dr. Sulaiman, Sp. PD",
    };
    setDataSource((pre) => {
      return [...pre, newStudent];
    });
  };
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Apakah anda yakin akan menghapus data ini?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((student) => student.id !== record.id);
        });
      },
    });
  };
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  return (
    
  <Layout>
<React.Fragment>
    <Header style={{backgroundColor: "#f6c159", display : "flex"}}>
      
          <h3 style={{display: "flex", justifyContent: "flex-start", marginTop: "auto", marginLeft: "none", color : "white", textAlign: "left"}}>
          <AntDesignOutlined />&nbsp;&nbsp;SISTEM INFORMASI RUMAH SAKIT
          </h3>
          <h3 style={{display: "flex", justifyContent: "space-between",margin: "auto", color : "white"}}>
            RUMAH SAKIT X
          </h3>

          
      
      <Button  style={{backgroundColor: "#fae4a4", marginTop: "auto", marginBottom:"auto", marginRight: "none", display: "flex",justifyContent: "flex-end"}}>
      <UserOutlined style={{margin : "auto"}}/>
          <span>Zahra Admin</span>
      <DownOutlined style={{marginTop : "auto", marginBottom:"auto", marginRight: "none"}}/>
        
      </Button>

    
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
          <hr></hr>
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
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<PrinterOutlined />}>CETAK KARTU</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<FileOutlined />}>GENERAL CONSENT</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<ForkOutlined/>}>PEMERIKSAAN FISIK</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<SnippetsOutlined />}>ASSESMEN MEDIS</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<SnippetsOutlined />}>ASSESMEN KEPERAWATAN</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<SnippetsOutlined />}>ASSESMEN AWAL NAPZA</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<FileSearchOutlined />}>DIAGNOSIS (ICD-10)</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<SnippetsOutlined />}>CPPT</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<SnippetsOutlined />}>TINDAKAN</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<SnippetsOutlined />}>RESEP</Button>
    </Space>
    <Space>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<FormOutlined />}>UPDATE PASIEN</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<UserOutlined />}>PENUNJANG</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<ForkOutlined/>}>KONSULTASI</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<CarOutlined />}>TINDAK LANJUT</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)", backgroundColor: "#FE9F23"}} type="primary"icon={<SnippetsOutlined />}>PRMRJ</Button>
      <Button style={{boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)"}} icon={<HistoryOutlined />}>DATA HISTORY</Button>
    </Space>
    </Space>
    </div>
    <div style={{margin:"25px"}}>
          <h3>&nbsp;&nbsp;&nbsp;&nbsp;<UserOutlined /> Profil Ringkas Medis Rawat Jalan(PRMRJ)</h3>
          <hr></hr>
        <Button onClick={onAddStudent} style={{marginBottom:"10px", marginRight:"none"}}>Tambah<PlusOutlined /></Button>
        <Table columns={columns} dataSource={dataSource}></Table>
        <Modal
          title="Edit Data"
          visible={isEditing}
          okText="Save"
          onCancel={() => {
            resetEditing();
          }}
          onOk={() => {
            setDataSource((pre) => {
              return pre.map((student) => {
                if (student.id === editingStudent.id) {
                  return editingStudent;
                } else {
                  return student;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input addonBefore="Tgl. Registrasi"
            value={editingStudent?.date}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, date: e.target.value };
              });
            }}
          />
          <Input addonBefore="Klinik"
            value={editingStudent?.klinik}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, klinik: e.target.value };
              });
            }}
          />
          <Input addonBefore="Alergi"
            value={editingStudent?.alergi}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, alergi: e.target.value };
              });
            }}
          />
          <Input addonBefore="Diagnosa"
            value={editingStudent?.diagnosa}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, diagnosa: e.target.value };
              });
            }}
          />
          <Input addonBefore="Kode ICD 10"
            value={editingStudent?.kode}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, kode: e.target.value };
              });
            }}
          />
          <Input addonBefore="Pengobatan saat ini"
            value={editingStudent?.obat}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, obat: e.target.value };
              });
            }}
          />
          <Input addonBefore="Tindakan"
            value={editingStudent?.tindakan}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, tindakan: e.target.value };
              });
            }}
          />
          <Input addonBefore="Nama Dokter"
            value={editingStudent?.dokter}
            onChange={(e) => {
              setEditingStudent((pre) => {
                return { ...pre, dokter: e.target.value };
              });
            }}
          />
        </Modal>
        </div>
        </Content>
      <Footer>
        <span>
        21 Desember 2022 | User : Administrator - Zahra Administrator
        </span>
        <span style={{float:"right"}}>
        Copyright <CopyrightOutlined />
        </span>
        </Footer>
      
    </Layout>
    );
   
};
export default App;