import React from "react";

export default ({ input, label, type, required, meta: { error, touched } }) => {
    // console.log(meta)
    return (
        <div className="form-group">
            <label className="title">{label}</label>
            <input className="form-control" type={type} required={required} {...input} />
            {error && touched && (
                <div className="mt-2 text-danger title">{error}</div>
            )}
        </div>
    )
}