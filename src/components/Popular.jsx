import React from 'react';
import './Popular.css';
import PropTypes from 'prop-types';

//Stateless functional Component.
function SelectLanguage(props){
        var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];
        return (
            <ul className="languages">
                {
                    languages.map(function (language) {
                        var selectionStyle = props.selectedLanguage === language ? 'selected-item' : null;
                        return (
                            <li className={selectionStyle}
                                onClick={props.onSelect.bind(null, language)}
                                key={language}>
                                {language}
                            </li>
                        );
                    })
                }
            </ul>
        )
}

SelectLanguage.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {

    constructor(props) {
        super(props);//important

        //State update triggers the re-render of the Component.
        this.state = {
            selectedLanguage: "All"
        };
    }

    updateLanguage(lang) {

        //Updates the state of the Component.
        this.setState(function () {
            return {
                selectedLanguage: lang
            }
        });
    }

    render() {


        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage.bind(this)} />
            </div>
        );
    }
}

export default Popular;