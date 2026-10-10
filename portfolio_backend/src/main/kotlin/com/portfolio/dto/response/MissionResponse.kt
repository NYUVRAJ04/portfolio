package com.portfolio.dto.response

import com.portfolio.model.Mission
import java.util.UUID

data class MissionResponse(
    val id: UUID,
    val experienceId: UUID,
    val title: String,
    val description: String,
    val problem: String,
    val solution: String,
    val impact: String,
    val technologies: List<String>,
    val displayOrder: Int
) {
    companion object {

        fun from(mission: Mission): MissionResponse {
            return MissionResponse(
                id = mission.id,
                experienceId = mission.experienceId,
                title = mission.title,
                description = mission.description,
                problem = mission.problem,
                solution = mission.solution,
                impact = mission.impact,
                technologies = mission.technologies,
                displayOrder = mission.displayOrder
            )
        }
    }
}