import { prisma } from "@/lib/db"
import type { Friend, User } from "@prisma/client"

export const getFriends = async (currentUser: Pick<User, 'id'>) => {
    const friendsRaw = await prisma.friend.findMany({
      include: {
        approached: {
          select: {
            id: true,
            name: true,
            image: true,
          }
        },
        approaching: {
          select: {
            id: true,
            name: true,
            image: true,
          }
        },
      },
      where: {
        OR: [
          {
            approachedId: currentUser.id,
          },
          {
            approachingId: currentUser.id,
          },
        ]
      }
    })
  
    const pendingFriends = friendsRaw.filter(({ isAccepted, approachedId }) => !isAccepted && approachedId === currentUser.id)
    const friends = friendsRaw.filter(({ isAccepted }) => isAccepted)

    return {
        pendingFriends,
        friends,
    }
}

export const getFriendData = (user: Pick<User, 'id'>) => (friend: Friend & {
  approaching: {
      id: string;
      name: string | null;
      image: string | null;
  };
  approached: {
      id: string;
      name: string | null;
      image: string | null;
  };
}) => {
  if (friend.approachedId === user.id) {
    return friend.approaching
  }

  return friend.approached
}
