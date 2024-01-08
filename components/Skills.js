import React from 'react'
import { skillData } from '@/constants';

function Skills() {

    let skillSetArray = [];

    skillData.map((skill) => {
        let skillSet = '';
        skill.data.map((item, index) => {
            skillSet = skillSet + item.name;
            if(index != skill.data.length - 1) {
                skillSet = skillSet + ', '
            }
        })
        skillSetArray.push(skillSet)
    })

    return (
        <div>
            <div className="mb-16 text-left">
                <div>
                    {skillData.map((item, index) => {
                        const { title } = item;
                        return (
                            <div className="flex flex-col gap-y-2 mt-[24px]">
                                <div className="text-primary">{title}</div>
                                <div className="border-b border-border" />
                                <div>{skillSetArray[index]}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills
