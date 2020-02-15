import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import FormField from "../common/FormField"
import { productFormFields } from "./formFields";
class ProductForm extends Component {

    renderFields(formFields) {
        return formFields.map(({ label, name, type, required }) => {
            return <Field key={name} label={label} name={name} type={type} required={required} component={FormField} />
        });
    }

    render() {
        const { onProductSubmit } = this.props;
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
                    {this.renderFields(productFormFields)}
                    <button className="btn btn-block btn-info title" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};
    productFormFields.forEach(({ name, required }) => {
        if (!values[name] && required) {
            errors[name] = 'Please input data';
        }
    });
    return errors;
}

function mapStateToProps({ products }) {
    console.log(products)
    if (products && products.id) {
        return { initialValues: products };
    }
    else {
        return {};
    }

}

ProductForm = reduxForm({ validate, form: "productForm" })(ProductForm);

export default connect(mapStateToProps)(ProductForm);