import { UserRepository } from '../repositories/userRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userRepository = new UserRepository();
const jwtSecret = process.env.JWT_SECRET || 'secret';

export class AuthService {
  async registerUser(name: string, email: string, password: string) {
    const existingUser = await userRepository.getUserByEmail(email);
    if (existingUser) {
      throw new Error('User already exists');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await userRepository.addUser(name, email, passwordHash);

    return { id: newUser.id, name: newUser.name, email: newUser.email };
  }

  async loginUser(email: string, password: string) {
    const user = await userRepository.getUserByEmail(email);
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const passwordMatch = await bcrypt.compare(password, user.passwordHash);
    if (!passwordMatch) {
      throw new Error('Invalid email or password');
    }

    const token = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
    return { user: { id: user.id, name: user.name, email: user.email }, token };
  }
}
