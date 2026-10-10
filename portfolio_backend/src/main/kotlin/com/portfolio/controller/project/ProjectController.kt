package com.portfolio.controller.project

import com.portfolio.controller.ApiPaths
import com.portfolio.dto.response.ProjectResponse
import com.portfolio.service.project.ProjectService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping(ApiPaths.PROJECTS)
class ProjectController(
    private val projectService: ProjectService
) {

    @GetMapping
    fun getProjects(): List<ProjectResponse> {
        return projectService.getProjects()
    }

    @GetMapping("/{id}")
    fun getProject(
        @PathVariable id: UUID
    ): ProjectResponse {
        return projectService.getProject(id)
    }
}
