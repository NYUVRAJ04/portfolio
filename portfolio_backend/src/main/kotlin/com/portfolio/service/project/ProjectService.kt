package com.portfolio.service.project

import com.portfolio.dto.response.ProjectResponse
import com.portfolio.exception.ResourceNotFoundException
import com.portfolio.repository.ProjectRepository
import org.springframework.stereotype.Service
import java.util.UUID

@Service
class ProjectService(
    private val projectRepository: ProjectRepository
) {

    fun getProjects(): List<ProjectResponse> {
        return projectRepository
            .findAllByOrderByDisplayOrderAsc()
            .map { ProjectResponse.from(it) }
    }

    fun getProject(id: UUID): ProjectResponse {

        val project = projectRepository.findById(id)
            .orElseThrow {
                ResourceNotFoundException("Project not found with id: $id")
            }
        return ProjectResponse.from(project)
    }
}