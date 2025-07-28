import { Table } from "antd";
import CustomTable from "../../../components/table/Table";
// import Detail from "../detail-page/Detail";
import { useEffect, useState } from "react";
import Template from "../template/Template";
import "./userTemplate.css";

const TemplateMainPage = () => {
  const [newPage, setNewPage] = useState(false);
  // Define columns
  useEffect(() => {
    console.log(newPage);
  }, [newPage]);
  const columns = [
    {
      title: "Template name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Last updated",
      dataIndex: "last updated",
      key: "last updated",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  // Define data
  const data = [
    {
      key: "1",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1234567890",
      message: "Looking for more details on your services.",
    },
    {
      key: "2",
      name: "Jane Smith",
      email: "janesmith@example.com",
      phone: "+9876543210",
      message: "Interested in a partnership.",
    },
    {
      key: "3",
      name: "Michael Brown",
      email: "michaelb@example.com",
      phone: "+1122334455",
      message: "Need support regarding my order.",
    },
    {
      key: "1",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "+1234567890",
      message: "Looking for more details on your services.",
    },
    // {
    //     key: "2",
    //     name: "Jane Smith",
    //     email: "janesmith@example.com",
    //     phone: "+9876543210",
    //     message: "Interested in a partnership.",
    // },
    // {
    //     key: "3",
    //     name: "Michael Brown",
    //     email: "michaelb@example.com",
    //     phone: "+1122334455",
    //     message: "Need support regarding my order.",
    // },
    // {
    //     key: "1",
    //     name: "John Doe",
    //     email: "johndoe@example.com",
    //     phone: "+1234567890",
    //     message: "Looking for more details on your services.",
    // },
    // {
    //     key: "2",
    //     name: "Jane Smith",
    //     email: "janesmith@example.com",
    //     phone: "+9876543210",
    //     message: "Interested in a partnership.",
    // },
    // {
    //     key: "3",
    //     name: "Michael Brown",
    //     email: "michaelb@example.com",
    //     phone: "+1122334455",
    //     message: "Need support regarding my order.",
    // },
    // {
    //     key: "1",
    //     name: "John Doe",
    //     email: "johndoe@example.com",
    //     phone: "+1234567890",
    //     message: "Looking for more details on your services.",
    // },
    // {
    //     key: "2",
    //     name: "Jane Smith",
    //     email: "janesmith@example.com",
    //     phone: "+9876543210",
    //     message: "Interested in a partnership.",
    // },
    // {
    //     key: "3",
    //     name: "Michael Brown",
    //     email: "michaelb@example.com",
    //     phone: "+1122334455",
    //     message: "Need support regarding my order.",
    // },
    // {
    //     key: "1",
    //     name: "John Doe",
    //     email: "johndoe@example.com",
    //     phone: "+1234567890",
    //     message: "Looking for more details on your services.",
    // },
    // {
    //     key: "2",
    //     name: "Jane Smith",
    //     email: "janesmith@example.com",
    //     phone: "+9876543210",
    //     message: "Interested in a partnership.",
    // },
    // {
    //     key: "3",
    //     name: "Michael Brown",
    //     email: "michaelb@example.com",
    //     phone: "+1122334455",
    //     message: "Need support regarding my order.",
    // }
  ];

  const handleAdd = (e) => {
    console.log(e);
    e.newPage && setNewPage(true);
  };

  const handleBack = (e) => {
    console.log(e);
    !e.newPage && setNewPage(false);
  };
  return (
    <div className="template-main-container">
      {/* <h1 className="text-xl font-semibold mb-4">Contact Us</h1> */}

      {newPage ? (
        <Template BackButton={handleBack} />
      ) : (
        <div className="table-wrapper">
          <CustomTable
            columns={columns}
            addButtonClick={handleAdd}
            // data={data}
          />
        </div>
      )}
    </div>
  );
};

export default TemplateMainPage;
