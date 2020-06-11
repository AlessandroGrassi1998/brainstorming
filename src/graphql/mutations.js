/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addMemberToProject = /* GraphQL */ `
  mutation AddMemberToProject($input: AddMemberToProjectInput!) {
    addMemberToProject(input: $input) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      birthDay
      email
      username
      name
      surname
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      birthDay
      email
      username
      name
      surname
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      birthDay
      email
      username
      name
      surname
    }
  }
`;
export const createProject = /* GraphQL */ `
  mutation CreateProject(
    $input: CreateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    createProject(input: $input, condition: $condition) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject(
    $input: UpdateProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    updateProject(input: $input, condition: $condition) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject(
    $input: DeleteProjectInput!
    $condition: ModelProjectConditionInput
  ) {
    deleteProject(input: $input, condition: $condition) {
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
export const createSession = /* GraphQL */ `
  mutation CreateSession(
    $input: CreateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    createSession(input: $input, condition: $condition) {
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
export const updateSession = /* GraphQL */ `
  mutation UpdateSession(
    $input: UpdateSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    updateSession(input: $input, condition: $condition) {
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
export const deleteSession = /* GraphQL */ `
  mutation DeleteSession(
    $input: DeleteSessionInput!
    $condition: ModelSessionConditionInput
  ) {
    deleteSession(input: $input, condition: $condition) {
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
export const createPostit = /* GraphQL */ `
  mutation CreatePostit(
    $input: CreatePostitInput!
    $condition: ModelPostitConditionInput
  ) {
    createPostit(input: $input, condition: $condition) {
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
export const updatePostit = /* GraphQL */ `
  mutation UpdatePostit(
    $input: UpdatePostitInput!
    $condition: ModelPostitConditionInput
  ) {
    updatePostit(input: $input, condition: $condition) {
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
export const deletePostit = /* GraphQL */ `
  mutation DeletePostit(
    $input: DeletePostitInput!
    $condition: ModelPostitConditionInput
  ) {
    deletePostit(input: $input, condition: $condition) {
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
export const createTemplate = /* GraphQL */ `
  mutation CreateTemplate(
    $input: CreateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    createTemplate(input: $input, condition: $condition) {
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
export const updateTemplate = /* GraphQL */ `
  mutation UpdateTemplate(
    $input: UpdateTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    updateTemplate(input: $input, condition: $condition) {
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
export const deleteTemplate = /* GraphQL */ `
  mutation DeleteTemplate(
    $input: DeleteTemplateInput!
    $condition: ModelTemplateConditionInput
  ) {
    deleteTemplate(input: $input, condition: $condition) {
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
