import React from 'react';
import toRoman from './toRoman';

class RomanConverter extends React.Component {

    state = {
        roman: null,
    };
    
    handleChange = event => {
        this.setState({
            roman: toRoman(event.target.value),
        });
    };

    render() {
        return (
            <>
                <p>Accepts range from 1 to 2999.</p>
                <form className="arabic">
                    <label>Arabic: <input type="number" min="1" max="2999" onChange={this.handleChange} /></label>
                </form>
                <div className="roman">
                    Roman: {this.state.roman || 'none'}
                </div>
            </>
        )
    }
};

export default RomanConverter;
