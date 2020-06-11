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
          templateId
          personalizationsToTemplate
          rating
          startingTimestamp
          endingTimestamp
          started
          finished
          currentPhase
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
      templateId
      personalizationsToTemplate
      rating
      startingTimestamp
      endingTimestamp
      started
      finished
      currentPhase
      ideasGenerated {
        items {
          id
          content
          peapleCanUpdate
          peapleCanRead
          phase
          sessionID
          owner
        }
        nextToken
      }
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
        templateId
        personalizationsToTemplate
        rating
        startingTimestamp
        endingTimestamp
        started
        finished
        currentPhase
        ideasGenerated {
          nextToken
        }
        ideaGenerated
        participants
        projectMembers
      }
      nextToken
    }
  }
`;
export const getPostit = /* GraphQL */ `
  query GetPostit($id: ID!) {
    getPostit(id: $id) {
      id
      content
      peapleCanUpdate
      peapleCanRead
      phase
      sessionID
      owner
    }
  }
`;
export const listPostits = /* GraphQL */ `
  query ListPostits(
    $filter: ModelPostitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        peapleCanUpdate
        peapleCanRead
        phase
        sessionID
        owner
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
    $id: ID
    $filter: ModelTemplateFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTemplates(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
