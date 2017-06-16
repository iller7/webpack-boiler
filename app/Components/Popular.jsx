import React from 'react';

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'All',
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(() => ({
      selectedLanguage: lang,
    }));
  }

  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python', 'SQL'];
    // console.log('1');
    return (
      <div className="languages">
        <ul>
          {
            languages.map(lang => (
              <li
                key={lang}
                onClick={this.updateLanguage.bind(null, lang)}
                className={lang === this.state.selectedLanguage ? 'active' : ''}
                style={lang === this.state.selectedLanguage ? { color: '#fff' } : null}
                role="navigation"
              >
                {lang}
              </li>
            ))
          }
        </ul>
        <p className="black">Selected Language = {this.state.selectedLanguage}</p>
      </div >
    );
  }
}
