import React from 'react';

const PostSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value}
                style={{marginTop: 15}}
                onChange={event => onChange(event.target.value)}>
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default PostSelect;