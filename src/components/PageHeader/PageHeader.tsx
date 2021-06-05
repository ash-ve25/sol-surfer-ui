import React from 'react'
import styled from 'styled-components'
import { Typography } from 'antd'

interface PageHeaderProps {
  title: string
  description?: string
  level?: 1 | 2 | 3 | 4 | 5
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  level
}) => {

  return (
    <PageHeaderStyled>
      <Typography.Title className="page-header-title" level={level}>{title}</Typography.Title>
      {description && <Typography className="page-header-description">{description}</Typography>}
    </PageHeaderStyled>
  )
}

const PageHeaderStyled = styled.header`
  .page-header-title {
    padding: 2rem;
  }
  .page-header-description {
    padding: 1rem;
  }
`