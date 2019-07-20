import React from 'react'
import { Popconfirm, Icon, Tooltip } from 'antd'
import './index.scss'

const EditDelete = props => {
  return (
    <div className="model-column-container">
      <div
        style={{
          textAlign: 'center',
          width: '100%'
        }}
      >
        <Tooltip title="Edit" placement="bottom">
          <Icon
            type="edit"
            className="model-icon-edit"
            onClick={props.onEdit}
          />
        </Tooltip>
        <Tooltip title="Delete" placement="bottom">
          <Popconfirm
            title={props.title}
            onConfirm={props.onRemove}
            okText="Yes"
            cancelText="No"
            placement="topRight"
          >
            <Icon type="delete" className="model-icon-delete" />
          </Popconfirm>
        </Tooltip>
      </div>
    </div>
  )
}

export default EditDelete
