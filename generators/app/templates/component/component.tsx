import React from 'react'
import styles from '<%= name %>.module.scss'

interface <%= name.split('-').map(n => n.replace(/^\w/, c => c.toUpperCase())).join('') %>Props {
    
}

export const <%= name.split('-').map(n => n.replace(/^\w/, c => c.toUpperCase())).join('') %>: React.FC<<%= name.split('-').map(n => n.replace(/^\w/, c => c.toUpperCase())).join('') %>Props> = ({ }) => {
    return (
        <div className={styles.container}>
            Hello from <%= name %>
        </div>
    )
}
