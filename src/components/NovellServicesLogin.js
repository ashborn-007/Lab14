import React from 'react'

const NovellServicesLogin = () => {
    const styles = {
        container: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        },
        title: {
          fontSize: '24px',
          fontFamily: 'serif',
          marginBottom: '24px'
        },
        formContainer: {
          width: '100%',
          maxWidth: '500px'
        },
        formRow: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '16px'
        },
        label: {
          width: '150px',
          textAlign: 'left',
          marginRight: '16px'
        },
        input: {
          border: '1px solid #ccc',
          padding: '4px',
          width: '250px'
        },
        select: {
          border: '1px solid #ccc',
          padding: '4px',
          width: '250px',
          backgroundColor: 'white'
        },
        roleContainer: {
          display: 'flex'
        },
        labelColumn: {
          width: '150px',
          textAlign: 'left',
          marginRight: '16px',
          marginTop: '4px'
        },
        optionsColumn: {
          display: 'flex',
          flexDirection: 'column'
        },
        optionRow: {
          marginBottom: '4px'
        },
        radioInput: {
          marginRight: '8px'
        },
        checkbox: {
          marginRight: '8px'
        },
        buttonContainer: {
          marginLeft: '166px',
          display: 'flex'
        },
        button: {
          border: '1px solid #999',
          backgroundColor: '#f0f0f0',
          padding: '4px 16px',
          marginRight: '8px'
        }
      };
    
  return (
<div style={styles.container}>
      <h1 style={styles.title}>Novell Services Login</h1>
      
      <div style={styles.formContainer}>
        <div style={styles.formRow}>
          <label style={styles.label}>Username:</label>
          <input type="text" style={styles.input} />
        </div>
        
        <div style={styles.formRow}>
          <label style={styles.label}>Password:</label>
          <input type="password" style={styles.input} />
        </div>
        
        <div style={styles.formRow}>
          <label style={styles.label}>City of Employment:</label>
          <input type="text" style={styles.input} />
        </div>
        
        <div style={styles.formRow}>
          <label style={styles.label}>Web server:</label>
          <select style={styles.select}>
            <option>-- Choose a server --</option>
            <option>Server 1</option>
            <option>Server 2</option>
            <option>Server 3</option>
          </select>
        </div>
        
        <div style={styles.roleContainer}>
          <span style={styles.labelColumn}>Please specify your role:</span>
          <div style={styles.optionsColumn}>
            <div style={styles.optionRow}>
              <input type="radio" id="admin" name="role" style={styles.radioInput} />
              <label htmlFor="admin">Admin</label>
            </div>
            <div style={styles.optionRow}>
              <input type="radio" id="engineer" name="role" style={styles.radioInput} />
              <label htmlFor="engineer">Engineer</label>
            </div>
            <div style={styles.optionRow}>
              <input type="radio" id="manager" name="role" style={styles.radioInput} />
              <label htmlFor="manager">Manager</label>
            </div>
            <div style={styles.optionRow}>
              <input type="radio" id="guest" name="role" style={styles.radioInput} />
              <label htmlFor="guest">Guest</label>
            </div>
          </div>
        </div>
        
        <div style={{...styles.roleContainer, marginTop: '16px', marginBottom: '16px'}}>
          <span style={styles.labelColumn}>Single Sign-on to the following:</span>
          <div style={styles.optionsColumn}>
            <div style={styles.optionRow}>
              <input type="checkbox" id="mail" style={styles.checkbox} />
              <label htmlFor="mail">Mail</label>
            </div>
            <div style={styles.optionRow}>
              <input type="checkbox" id="payroll" style={styles.checkbox} />
              <label htmlFor="payroll">Payroll</label>
            </div>
            <div style={styles.optionRow}>
              <input type="checkbox" id="self-service" style={styles.checkbox} />
              <label htmlFor="self-service">Self-service</label>
            </div>
          </div>
        </div>
        
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Login</button>
          <button style={styles.button}>Reset</button>
        </div>
      </div>
    </div>

  )
}

export default NovellServicesLogin