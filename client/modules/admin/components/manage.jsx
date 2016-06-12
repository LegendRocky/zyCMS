import React from 'react';

import { Table, Icon } from 'antd';

class Manage extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
        };
    }
    addArticle() {
        let FlowRouter = this.props.FlowRouter;
        FlowRouter.go('/admin/addpost');
    }
    handleEdit() {
        alert('handleEdit');
    }
    handleDelete() {
        DORA.showSuccMessage('删除成功');
    }
    render() {
        console.log(Meteor.userId());
        let that = this;
        let data = this.props.data;
        _.map(data, function(item, index) {
            return _.extend(item,{key: index})
        })
        const columns = [{
            title: '文章题目',
            dataIndex: 'articleName',
            render(text) {
                return <a href="#">{text}</a>;
            },
        }, {
            title: '创建时间',
            dataIndex: 'createdAt',
            render(value) {
                return value.format(Constants.Time.formatToMs);
            }
        }, {
            title: '类型',
            dataIndex: 'type',
        }, {
            title: '内容',
            dataIndex: 'conent',
        }, {
            title: '发布人',
            dataIndex: 'username'
        }, {
            title: '操作',
            dataIndex: 'oper',
            render() {
                return (
                    <span>
                        <Icon onClick={that.handleEdit} type="edit" />
                        <Icon type="like" />
                        <Icon onClick={that.handleDelete} type="delete" />
                    </span>
                )
            }
        }];
        let LocalState = that.props.LocalState;
        const pagination = {
            //total: data.length,
            total: that.props.counts,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize);
                LocalState.set('POSTS_LIST_PAGE', 0);
                LocalState.set('POSTS_LIST_LIMIT', pageSize);
            },
            onChange(current) {
                console.log('Current: ', current);
                
                LocalState.set('POSTS_LIST_PAGE', current);
            },
        };
        const rowSelection = {
            onChange(selectedRowKeys, selectedRows) {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect(record, selected, selectedRows) {
                console.log(record, selected, selectedRows);
            },
            onSelectAll(selected, selectedRows, changeRows) {
                console.log(selected, selectedRows, changeRows);
            },
        };
        //let pagination = this.props.pagination;
        return (
            <div>
                <div className="add-oper">
                    <span onClick={this.addArticle.bind(this)}>+添加文章</span>
                </div>
                <div id="manage-table">
                    <Table columns={columns} rowSelection={rowSelection} dataSource={data} pagination={pagination} />
                </div>
            </div>
        )
    }
}

export default Manage;
