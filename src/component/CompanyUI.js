import React, {Fragment} from "react";
import {Button, List} from "antd";
import 'antd/dist/antd.css'

const CompanyUI = (props) => {
    return (
        <Fragment>
            <input placeholder={"输入公司名称"} onChange={props.changeWord} value={props.word}/>
            <Button type={"primary"} onClick={props.addCompany}>add</Button>
            <List
                bordered
                dataSource={props.companies}
                renderItem={(item, index) => (<List.Item onClick={() => props.delCompany(index)}>{item}</List.Item>)}
            />
        </Fragment>
    )
};

export default CompanyUI;