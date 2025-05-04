import React from 'react';

const SideList = () => {
    return (
        <div style={styles.sideList}>
            <ul style={styles.list}>
                <li style={styles.listItem}>Component 1</li>
                <li style={styles.listItem}>Component 2</li>
                <li style={styles.listItem}>Component 3</li>
            </ul>
        </div>
    );
};

const styles = {
    sideList: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: '200px',
        height: '100%',
        backgroundColor: '#3e2d59',
        color: 'white',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 1000,
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
    },
    listItem: {
        margin: '10px 0',
        cursor: 'pointer',
    },
};

export default SideList;