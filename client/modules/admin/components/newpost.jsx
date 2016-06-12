import React from 'react';
import { Input, Select, Radio, Checkbox, Button, DatePicker, InputNumber, Form, Cascader, Icon, QueueAnim } from 'antd';

const Option = Select.Option;
const RadioGroup = Radio.Group;
const createForm = Form.create;
const FormItem = Form.Item;

class NewPost extends React.Component{
    componentDidMount() {
        this.props.form.setFieldsValue({
            eat: true,
            sleep: true,
            beat: true,
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.props.form.resetFields();
    }

    handleSubmit(e) {
        e.preventDefault();
        let that = this;
        this.props.form.validateFieldsAndScroll((errors, values) => {
            if (!!errors) {
                console.log(errors);
                console.log('Errors in form!!!');
                return;
            }
            console.log('Submit!!!');
            console.log(values);
            let create = that.props.createPost;
            create(values)
        });
    }

    checkBirthday(rule, value, callback) {
        if (value && value.getTime() >= Date.now()) {
            callback(new Error('你不可能在未来出生吧!'));
        } else {
            callback();
        }
    }

    checkPrime(rule, value, callback) {
        if (value !== 11) {
            callback(new Error('8~12之间的质数明明是11啊!'));
        } else {
            callback();
        }
    }

    render() {
        const address = [{
            value: 'zhejiang',
            label: '浙江',
            children: [{
                value: 'hangzhou',
                label: '杭州',
            }],
        }];
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;
        const nameProps = getFieldProps('articleName', {
            rules: [
                { required: true, min: 5, message: '用户名至少为 5 个字符' },
                { validator: this.userExists },
            ],
        });

        // const passProps = getFieldProps('pass', {
        //     rules: [
        //         { required: true, whitespace: true, message: '请填写密码' },
        //         { validator: this.checkPass },
        //     ],
        //     onChange: (e) => {
        //         console.log('你的密码就是这样被盗的：', e.target.value);
        //     },
        // });

        const selectProps = getFieldProps('type', {
            rules: [
                { required: true, message: '请选择您的国籍' },
            ],
        });
        // const multiSelectProps = getFieldProps('multiSelect', {
        //     rules: [
        //         { required: true, message: '请选择您喜欢的颜色', type: 'array' },
        //     ],
        // });
        // const radioProps = getFieldProps('radio', {
        //     rules: [
        //         { required: true, message: '请选择您的性别' },
        //     ],
        // });
        // const birthdayProps = getFieldProps('birthday', {
        //     rules: [
        //         {
        //             required: true,
        //             type: 'date',
        //             message: '你的生日是什么呢?',
        //         }, {
        //             validator: this.checkBirthday,
        //         },
        //     ],
        // });
        // const primeNumberProps = getFieldProps('primeNumber', {
        //     rules: [{ validator: this.checkPrime }],
        // });
        // const addressProps = getFieldProps('address', {
        //     rules: [{ required: true, type: 'array' }],
        // });
        const textareaProps = getFieldProps('conent', {

        });

        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 12 },
        };
        return (
            <QueueAnim className="demo-content">
            <Form horizontal form={this.props.form}>
                <FormItem
                    {...formItemLayout}
                        label="文章标题："
                        hasFeedback
                        help={isFieldValidating('articleName') ? '校验中...' : (getFieldError('name') || []).join(', ')}>
                    <Input {...nameProps} placeholder="实时校验，输入 JasonWood 看看" />
                </FormItem>

                <FormItem
                    {...formItemLayout}
                    label="类别：">
                    <Select {...selectProps} placeholder="请选择类别" style={{ width: '100%' }}>
                        <Option value="wendang">文档</Option>
                        <Option value="chajian">插件</Option>
                    </Select>
                </FormItem>

                {
                //   <FormItem
                //     {...formItemLayout}
                //     label="喜欢的颜色：">
                //     <Select {...multiSelectProps} multiple placeholder="请选择颜色" style={{ width: '100%' }}>
                //         <Option value="red">红色</Option>
                //         <Option value="orange">橙色</Option>
                //         <Option value="yellow">黄色</Option>
                //         <Option value="green">绿色</Option>
                //         <Option value="blue">蓝色</Option>
                //     </Select>
                // </FormItem>

                // <FormItem
                //     {...formItemLayout}
                //     label="性别：">
                //     <RadioGroup {...radioProps}>
                //         <Radio value="male">男</Radio>
                //         <Radio value="female">女</Radio>
                //     </RadioGroup>
                //     <span><Icon type="info-circle-o" /> 暂不支持其它性别</span>
                // </FormItem>

                // <FormItem
                //     {...formItemLayout}
                //     label="兴趣爱好：">
                //     <Checkbox {...getFieldProps('eat', {
                //         valuePropName: 'checked',
                //     })}>吃饭饭</Checkbox>
                //     <Checkbox {...getFieldProps('sleep', {
                //         valuePropName: 'checked',
                //     })}>睡觉觉</Checkbox>
                //     <Checkbox {...getFieldProps('beat', {
                //         valuePropName: 'checked',
                //     })}>打豆豆</Checkbox>
                // </FormItem>

                // <FormItem
                //     {...formItemLayout}
                //     label="生日：">
                //     <DatePicker {...birthdayProps} />
                // </FormItem>

                // <FormItem
                //     {...formItemLayout}
                //     label="8~12间的质数：">
                //     <InputNumber {...primeNumberProps} min={8} max={12} />
                // </FormItem>

                // <FormItem
                //     {...formItemLayout}
                //     label="选择地址：">
                //     <Cascader {...addressProps} options={address} />
                // </FormItem>
                }

                <FormItem
                    id="control-textarea"
                    label="文本域："
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}>
                    <Input {...textareaProps} type="textarea" id="control-textarea" rows="3" />
                </FormItem>

                <FormItem
                    wrapperCol={{ span: 12, offset: 7 }} >
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>确定</Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button type="ghost" onClick={this.handleReset.bind(this)}>重置</Button>
                </FormItem>

                
            </Form>
            </QueueAnim>
        );
    }
}

export default createForm()(NewPost);