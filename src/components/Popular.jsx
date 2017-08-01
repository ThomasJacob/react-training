import React from 'react';
import './Popular.css';
import PropTypes from 'prop-types';
import api from '../utils/api.js';

//Stateless functional Component.
function SelectLanguage(props) {
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

function RepoGrid(props) {
    return (
        <ul className='popular-list'>
            {
                props.repos.map(function (repo, index) {
                    return (
                        <li key={repo.name} className='popular-item'>
                            <div className='popular-rank'>#{index + 1}</div>
                            <ul className='space-list-items'>
                                <li>
                                    <img className='avatar'
                                        src={repo.owner.avatar_url}
                                        alt={'Avatar for ' + repo.owner.login} />
                                </li>
                                <li><a href={repo.html_url}>{repo.name}</a></li>
                                <li>@{repo.owner.login}</li>
                                <li>{repo.stargazers_count} stars</li>
                            </ul>
                        </li>
                    );
                })
            }
        </ul>
    );
}

RepoGrid.propTypes = {
    repos: PropTypes.array.isRequired,
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
            selectedLanguage: "All",
            repos: null
        };
    }

    //Shown to the screen
    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage(lang) {

        //Updates the state of the Component.
        this.setState(function () {
            return {
                selectedLanguage: lang,
                repos: null
            }
        });

        api.fetchPopularRepos(lang).
            then(function (repos) {
                this.setState(function () {
                    return {
                        repos: repos
                    };
                });
            }.bind(this));
    }

    render() {


        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    onSelect={this.updateLanguage.bind(this)} />
                {!this.state.repos ? <div><p>Loading</p></div> :
                    <RepoGrid repos={this.state.repos} />}
            </div>
        );
    }
}

export default Popular;