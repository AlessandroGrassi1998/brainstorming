/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($email: String!) {
    onCreateUser(email: $email) {
      id
      birthDay
      email
      username
      name
      surname
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($email: String!) {
    onUpdateUser(email: $email) {
      id
      birthDay
      email
      username
      name
      surname
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($email: String!) {
    onDeleteUser(email: $email) {
      id
      birthDay
      email
      username
      name
      surname
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String!) {
    onCreateProject(owner: $owner) {
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
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String!) {
    onUpdateProject(owner: $owner) {
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
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String!) {
    onDeleteProject(owner: $owner) {
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
export const onCreateSession = /* GraphQL */ `
  subscription OnCreateSession($participants: String!) {
    onCreateSession(participants: $participants) {
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
export const onUpdateSession = /* GraphQL */ `
  subscription OnUpdateSession($participants: String!) {
    onUpdateSession(participants: $participants) {
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
export const onDeleteSession = /* GraphQL */ `
  subscription OnDeleteSession($participants: String!) {
    onDeleteSession(participants: $participants) {
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
export const onCreateTemplate = /* GraphQL */ `
  subscription OnCreateTemplate {
    onCreateTemplate {
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
export const onUpdateTemplate = /* GraphQL */ `
  subscription OnUpdateTemplate {
    onUpdateTemplate {
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
export const onDeleteTemplate = /* GraphQL */ `
  subscription OnDeleteTemplate {
    onDeleteTemplate {
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
