import React from 'react';
import './Popular.css';

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

        var languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

        return (
            <ul className="languages">
                {
                    languages.map(function (language) {
                        var selectionStyle = this.state.selectedLanguage === language ? 'selected-item' : null;
                        return (
                            <li className={selectionStyle}
                                onClick={this.updateLanguage.bind(this, language)}
                                key={language}>
                                {language}
                            </li>
                        );
                    }, this)

                    /*
                    //ES6
                    languages.map((language) => {
                        return (
                            <li style={language === this.state.selectedLanguage ? { color: '#d0021b' } : null}
                                onClick={this.updateLanguage.bind(this, language)}
                                key={language}>
                                {language}
                            </li>
                        );
                    })*/
                }
            </ul>
        );
    }
}

export default Popular;