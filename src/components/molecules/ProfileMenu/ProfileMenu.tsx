import React from 'react'
import { AiFillProject } from 'react-icons/ai'
import { BiBookBookmark } from 'react-icons/bi'
import { FiPackage } from 'react-icons/fi'
import { HiOutlineBookOpen } from 'react-icons/hi'

import { ProfileMenuContainer, Item, Counter } from './styles'

interface ProfileMenuProps {
  repositories: number
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ repositories }) => {
  return (
    <ProfileMenuContainer>
      <Item>
        <HiOutlineBookOpen /> Overview
      </Item>
      <Item className='selected'>
        <BiBookBookmark />
        Repositories <Counter>{repositories}</Counter>
      </Item>
      <Item>
        <AiFillProject />
        Projects
      </Item>
      <Item>
        <FiPackage /> Packages
      </Item>
    </ProfileMenuContainer>
  )
}

export default ProfileMenu
