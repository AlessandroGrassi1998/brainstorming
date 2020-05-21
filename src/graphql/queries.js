/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
      birthDay
      email
      username
      name
      surname
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        birthDay
        email
        username
        name
        surname
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      name
      description
      members
      sessions {
        items {
          id
          topic
          projectID
          description
          startingTimestamp
          endingTimestamp
          started
          finished
          personalizationsToTemplate
          phase
          rating
          ideaGenerated
          participants
          projectMembers
        }
        nextToken
      }
      owner
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        members
        sessions {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getSession = /* GraphQL */ `
  query GetSession($id: ID!) {
    getSession(id: $id) {
      id
      topic
      projectID
      description
      startingTimestamp
      endingTimestamp
      started
      finished
      template {
        id
        nPhases
        maxParticipants
        minParticipants
        suggestedParticipants
        name
        description
        linkToReference
        phases
      }
      personalizationsToTemplate
      phase
      rating
      ideaGenerated
      participants
      projectMembers
    }
  }
`;
export const listSessions = /* GraphQL */ `
  query ListSessions(
    $filter: ModelSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topic
        projectID
        description
        startingTimestamp
        endingTimestamp
        started
        finished
        template {
          id
          nPhases
          maxParticipants
          minParticipants
          suggestedParticipants
          name
          description
          linkToReference
          phases
        }
        personalizationsToTemplate
        phase
        rating
        ideaGenerated
        participants
        projectMembers
      }
      nextToken
    }
  }
`;
export const getTemplate = /* GraphQL */ `
  query GetTemplate($id: ID!) {
    getTemplate(id: $id) {
      id
      nPhases
      maxParticipants
      minParticipants
      suggestedParticipants
      name
      description
      linkToReference
      phases
    }
  }
`;
export const listTemplates = /* GraphQL */ `
  query ListTemplates(
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nPhases
        maxParticipants
        minParticipants
        suggestedParticipants
        name
        description
        linkToReference
        phases
      }
      nextToken
    }
  }
`;
