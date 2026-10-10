package com.portfolio.dto.response

import com.portfolio.model.Project
import java.util.UUID

data class ProjectResponse(
    val id: UUID,
    val name: String,
    val raceName: String,
    val category: String,
    val description: String,
    val problem: String,
    val solution: String,
    val features: List<String>,
    val technologies: List<String>,
    val architecture: List<String>,
    val challenges: List<String>,
    val outcomes: List<String>,
    val githubUrl: String?,
    val demoUrl: String?,
    val imageUrl: String?,
    val status: String,
    val displayOrder: Int
) {
    companion object {

        fun from(project: Project): ProjectResponse {
            return ProjectResponse(
                id = project.id,
                name = project.name,
                raceName = project.raceName,
                category = project.category,
                description = project.description,
                problem = project.problem,
                solution = project.solution,
                features = project.features,
                technologies = project.technologies,
                architecture = project.architecture,
                challenges = project.challenges,
                outcomes = project.outcomes,
                githubUrl = project.githubUrl,
                demoUrl = project.demoUrl,
                imageUrl = project.imageUrl,
                status = project.status,
                displayOrder = project.displayOrder
            )
        }
    }
}