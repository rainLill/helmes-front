import React from 'react';
import Select from '@material-ui/core/Select';


function Options({tree, activeSectors, setActiveSectors}) {

    const handleChangeMultiple = (event) => {
        let {options} = event.target;
        let value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setActiveSectors(value);
    }

    return (
        <Select
            multiple
            native
            value={activeSectors}
            onChange={handleChangeMultiple}
            inputProps={{
                id: 'select-multiple-native'
            }}
        >
            {tree.map((sector) => (
                <option key={sector.id} value={sector.id} style={{marginLeft: sector.depth + 'em'}}>
                    {sector.sector}
                </option>
            ))}
        </Select>
    );
}

export default Options;
